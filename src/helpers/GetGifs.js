export const GetGift = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=brkkTG9o4yTFN77IMDY9wFQuePAhp08Z&q=${ category }&limit=16`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
