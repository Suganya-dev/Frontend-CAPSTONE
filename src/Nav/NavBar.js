import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import logo from "../logo/kidschorepad.png"
export const NavBar = () => {
    return (
        <ul className="navbar">
        <li className="navbar__item active">
                <Link className="navbar__link" to="/">PARENTS USERS</Link>
         </li>
         <img src={logo} alt="img" width="200" height ="200"></img>
         <li className="navbar__item">
                <Link className="navbar__link" to="/Users">KIDS USERS</Link>
        </li>
        </ul>
    )}