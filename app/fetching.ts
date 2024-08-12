export default async function Fetching(mode: string) {
  const fetcherText = `https://api.api-ninjas.com/v1/quotes?X-Api-Key=${process.env.API_QUOTE}&category=${mode}`;
  const data = await fetch(fetcherText);
  const res = data.json();
  return res;
}
