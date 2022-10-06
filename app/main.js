import "./style.css";
import { insertImages } from "./Components/insertImages/insertImages";

const triggerComponents = () => {
  const paintingsArray = insertImages("http://localhost:3000/paintings");
  console.log(paintingsArray);
};

triggerComponents();
