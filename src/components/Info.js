import React from "react"
import ameya from "../images/ameya.jpeg"
import icon from "../images/Icon.png"

export default function Info() {
    return (
        <div className="info">
            <img src={ameya} alt="Photo of Ameya" />
            <h2>Ameya Charnalia</h2>
            <h3>Frontend Developer</h3>
            <p>github.com/ameyayeg</p>
            <button><img className="logo" src={icon} alt="Email"/>Email</button>
        </div>
    )
}