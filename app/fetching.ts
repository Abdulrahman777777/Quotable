"use server";

const fetchQuote = async (mode: string) => {
  const fetcherText = `https://api.api-ninjas.com/v1/quotes?X-Api-Key=${process.env.API_QUOTE}&category=${mode}`;
  const data = await fetch(fetcherText).catch((err) => {
    return "please try agian";
  });
  if (typeof data == "string") {
    return data;
  } else {
    return data.json();
  }
};

const fetchImage = async () => {
  const fetcherImage = `https://api.unsplash.com/photos/random?client_id=${process.env.API_IMAGE}&width=1920&height=1080`;
  const data = await fetch(fetcherImage).catch((err) => {
    return "please try agian";
  });
  if (typeof data === "string") {
    return data;
  } else {
    return data.json();
  }
};

export default async function Fetching(mode: string) {
  const quote = await fetchQuote(mode);
  const image = await fetchImage();
  const data = {
    quote: quote[0].quote,
    image: image.urls.regular,
    author: quote[0].author,
  };
  return data;
}
