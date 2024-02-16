import React from "react";
import { Link } from "react-router-dom"

export default function NavElement(props) {
    return (
        <Link to={props.linkPath} className="link">
            <img className="navbar-li-logo" src={props.imgPath} />
            <p>{props.title}</p>
        </Link>
    )
}