import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";


const Header = () => {
    const [btnName,setbtnName] = useState("LOGIN");
    return (
        <div className="header">
            <div className = "logo-container">
                <img className="logo" src={LOGO_URL}></img>
                <h1><Link className="Header_Link" to="/">DishDash</Link></h1>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    <li>
                         <Link className="Header_Link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="Header_Link" to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="Header_Link" to="/contact">Contact Us</Link>
                    </li>
                    <button className="login-btn" onClick={()=>{
                        btnName==="LOGIN" ? setbtnName("LOGOUT") : setbtnName("LOGIN");
                    }}>{btnName}</button>
                    <li><FaCartShopping /></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;