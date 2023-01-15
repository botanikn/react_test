import React from "react";

const Header = () => {
    return(
        <div id="header">
            <div id="header__img">
                <img src={require("C:/tasks/react/first_mission/src/img/logo.PNG")} />
            </div>
            <div id="header__menulist">
                <a href="localhost:3000" className="header__listpunkt">Services</a>
                <a href="localhost:3000" className="header__listpunkt">Product</a>
                <a href="localhost:3000" className="header__listpunkt">Technology</a>
                <a href="localhost:3000" className="header__listpunkt">About</a>
                <a href="localhost:3000" className="header__listpunkt">Client</a>
                <a href="localhost:3000" className="header__listpunkt">Partner</a>
            </div>
        </div>
    );
};

export default Header;