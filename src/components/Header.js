import { LOGO_URL } from "../utils/constants";
import { useState } from "react";


const Header = () => {
    const [btnName,setbtnName] = useState("LOGIN");
    return (
        <div className="header">
            <div className = "logo-container">
                <img className="logo" src={LOGO_URL}></img>
                <h1><a href="#">DishDash</a></h1>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <button className="login-btn" onClick={()=>{
                        btnName==="LOGIN" ? setbtnName("LOGOUT") : setbtnName("LOGIN");
                    }}>{btnName}</button>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;