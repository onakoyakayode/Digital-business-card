import React from "react";
import Twitter from "./icons/twitter.png"
import Linkedin from "./icons/linkedin.png"
import Instagram from "./icons/instagram.png"
import Facebook from "./icons/facebook.png"
import Github from "./icons/github.png"
function Footer() {
    return (
        <footer className="footer">
           <div>
                <ul className="footer-icons">
                    <li>
                        <img src={Twitter} className="twitter-icon" alt="twitter" />
                    </li>
                    <li>
                        <img src={Facebook} className="facebook-icon" alt="twitter" />
                    </li>
                    <li>
                        <img src={Instagram} className="instgram-icon" alt="instagram" />
                    </li>
                    <li>
                        <img src={Linkedin} className="linkedin-icon" alt="linkedin" />
                    </li>
                    <li>
                        <img src={Github} className="github-icon" alt="github" />
                    </li>
                </ul>
           </div>
        </footer>
    )
}


export default Footer;