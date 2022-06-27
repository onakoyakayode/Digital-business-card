import React from "react";
import Email from "./icons/Icon.png"

function Main() {
    return (
        <main className="main">
            <div className="main-title">
                <h1 className="main-name">Laura Smith</h1>
                <h3 className="main-role">Frontend Developer</h3>
                <h5 className="main-contact">laurasmith.website</h5>
                <button className="main-email"><img src={Email} className="main-email-icon" alt="email"/>Email</button>
            </div>
            <div className="main-about">
                <h2 className="main-about-title">About</h2>
                <h5 className="main-about-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</h5>
            </div>
            <div className="main-interest">
                <h2 className="main-interest-title">Interests</h2>
                <h5 className="main-interest-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</h5>

            </div>
        </main>
    )
}


export default Main;