import "./style.css";
import { insertImages } from "./Components/insertImages/insertImages";
import { insertNavbar } from "./Components/insertNavbar/insertNavbar";

const triggerComponents = () => {
  insertNavbar();
  insertImages("http://localhost:3000/paintings");
};

triggerComponents();
