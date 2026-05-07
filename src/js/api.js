// api.js
const BASE_URL = "https://api.spacexdata.com/v3/launches";

export async function getLaunches(offset = 0, limit = 10) {
  const res = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  return res.json();
}
