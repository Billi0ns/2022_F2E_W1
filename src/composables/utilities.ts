export const getImageUrl = (name: string) => {
  const imgUrl = new URL(`../assets/${name}`, import.meta.url).href;
  return imgUrl;
};
