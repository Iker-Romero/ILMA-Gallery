export const getImages = async (url) => {
  try {
    const rawImages = await fetch(url);
    const jsonImages = await rawImages.json();
    return jsonImages;
  } catch (error) {
    console.log(error);
  }
};
