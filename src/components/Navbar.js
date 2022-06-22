import reactLogo from "../images/react-icon-small.png"
import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="logo" src={reactLogo}/>
            <h3 className="title">ReactFacts</h3>
            <h4 className="subtitle">React Course - Project 1</h4>
        </nav>
    )
}