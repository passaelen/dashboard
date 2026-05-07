const TWELVEDATA_BASE = "https://api.twelvedata.com/price";
const FX_URL = "https://open.er-api.com/v6/latest/USD";

async function getJson(url) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 8000);

  try {
    const res = await fetch(url, {
      signal: controller.signal
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status} on ${url}`);
    }

    return res.json();
  } finally {
    clearTimeout(timeout);
  }
}

function parsePrice(value){
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.TWELVEDATA_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing TWELVEDATA_API_KEY" });
  }

  try {
    const [vwce, gdx, gdxj, fx] = await Promise.all([
      getJson(`${TWELVEDATA_BASE}?symbol=SPY&apikey=${apiKey}`),
      getJson(`${TWELVEDATA_BASE}?symbol=GDX&apikey=${apiKey}`),
      getJson(`${TWELVEDATA_BASE}?symbol=GDXJ&apikey=${apiKey}`),
      getJson(FX_URL)
    ]);

    const rate = Number(fx?.rates?.EUR) || 1;

    return res.status(200).json({
      monde: parsePrice(vwce?.price),
      seniors: parsePrice(gdx?.price) * rate,
      juniors: parsePrice(gdxj?.price) * rate
    });
  } catch (err) {
    return res.status(502).json({
  error: err.message
});
  }
}
