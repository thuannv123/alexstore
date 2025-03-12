import React from "react";
import imglogo from "../../asset/img/logo.png";
import "../../asset/style/header.scss";

const Header = () => {
  return (
    <div className="main-header">
      <div className="containner">
        <div className="sub-container">
          <img src={imglogo} alt="" className="logo" />
          <div className="service"></div>
        </div>
      </div>
      <div className="navigation"></div>
    </div>
  );
};

export default Header;
