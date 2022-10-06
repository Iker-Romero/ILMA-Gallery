import "./style.css";
import { getImages } from "./Components/getImages";

const triggerComponents = () => {
  const imagesArray = getImages("http://localhost:3000/paintings");
};

triggerComponents();
console.log(imagesArray);
