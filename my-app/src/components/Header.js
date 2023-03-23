import React from "react";
import logo from "../images/logo.png"

export default function Header() {
    return (
        <header>
            <img src={logo} className="logo-img" />
            <h1 className="logo-text">my travel journal.</h1>
        </header>
    )
}