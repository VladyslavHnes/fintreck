import React from "react";
import { Link } from "react-router-dom"
import NavElement from "./NavElement";

export default function Navbar() {
    return (
        <div id="navbar">
            <div id="navbar-title-container">
                <h1 id="navbar-title">Fintreck</h1>
                <img id="navbar-title-logo" src="./icons/fintreck.png" />
            </div>
            <ul className="navbar-list">
                <li>
                    <NavElement linkPath=".." imgPath="./icons/dashboard.png" title="Dashboard"/>
                </li>
                <li>
                    <NavElement linkPath="wallet" imgPath="./icons/wallet.png" title="My Wallet"/>
                </li>
                <li>
                    <NavElement linkPath="profile" imgPath="./icons/profile.png" title="Profile"/>
                </li>
            </ul>
            <div id="navbar-logout">
                <img className="navbar-li-logo" src="./icons/logout.png" />
                <p>Logout</p>
            </div>
        </div> 
    )
}