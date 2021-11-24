import React from "react"
import twitter from "../images/Twitter.png"
import facebook from "../images/Facebook.png" 
import instagram from "../images/Instagram.png" 
import linkedin from "../images/Linkedin.png" 
import github from "../images/Github.png"


export default function Footer() {
    return (
        <div className="footer">
            <img src={twitter} alt="twitter-logo" />
            <img src={facebook} alt="facebook-logo"/>
            <img src={instagram} alt="instagram-logo"/>
            <img src={linkedin} alt="linkedin-logo"/>
            <img src={github} alt="github-logo"/>
        </div>
    )
}

