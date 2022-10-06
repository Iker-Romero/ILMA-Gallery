import "./style.css";
import { getImages } from "./Components/getImages/getImages";
// import { insertImages } from "./Components/insertImages/insertImages";

const triggerComponents = () => {
  const paintingsArray = getImages("http://localhost:3000/paintings");
  console.log(paintingsArray);
};

triggerComponents();
