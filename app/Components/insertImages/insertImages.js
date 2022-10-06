export const insertImages = async (url) => {
  try {
    const rawImages = await fetch(url);
    const jsonImages = await rawImages.json();
    const div = document.createElement('div');
    for (const painting of jsonImages) {
      console.log(painting["image"])
        div.innerHTML +=  `
        <figure>
            <img src="${painting["image"]}" alt="">
            <figcaption>${painting["title"]}</figcaption>
            <p>El autor es: ${painting["author"]}</p>
        </figure>
        `
    }
    document.body.appendChild(div);
  } catch (error) {
    console.log(error);
  }
};

