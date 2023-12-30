import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Slider.scss";

const Slider = () => {
  const data = [
    "https://th.bing.com/th/id/R.0aa9e65e523f34d59db062c37611f2a6?rik=pQUkRuzaulwPhg&riu=http%3a%2f%2fimage26.stylesimo.com%2fo_img%2f2017%2f08%2f09%2f231420-10380357%2fwomen-s-elegant-solid-evening-pleated-chiffon-dress.jpg&ehk=QynjssnOzvA%2fXl9QTSY03RoGcE0DYfVmVYTUABtPA7o%3d&risl=&pid=ImgRaw&r=0",
    "https://www.gotitabrands.com/wp-content/uploads/2019/05/Sleeveless-Maxi-Dresses-For-Women-Halter-Open-Back-Dress-With-Headscarf-Orange-Dress-1080x1620.jpg",
    "https://www.instaloverz.com/wp-content/uploads/2016/07/3-classy-womens-fashion.jpg",
  ];

  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} alt="logos" />
        <img src={data[1]} alt="logos" />
        <img src={data[2]} alt="logos" />
      </div>

      <div className="icons">
        <div className="icon">
          <ArrowBackIcon />
        </div>
        <div className="icon">
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
