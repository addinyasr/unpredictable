import React from "react";
import logo from "../../assets/images/logomedical.png";

const Header = () => {
  return (
    <Header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </Header>
  );
};
export default Header;
