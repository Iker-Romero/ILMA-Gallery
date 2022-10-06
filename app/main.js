import "./style.css";
import { insertImages } from "./Components/insertImages/insertImages";
import { insertNavbar } from "./Components/insertNavbar/insertNavbar";

const triggerComponents = () => {
  insertNavbar();
  const paintingsArray = insertImages("http://localhost:3000/paintings");
  console.log(paintingsArray);
};

triggerComponents();
