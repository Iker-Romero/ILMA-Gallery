export const getImages = async (url) => {
  try {
    const rawImages = await fetch(url);
    const jsonImages = await url.json();
    return jsonImages;
  } catch (error) {
    console.log(error);
  }
};
