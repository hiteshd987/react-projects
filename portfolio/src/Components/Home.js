import React from 'react'
import "./Home.css";
import Nav from "./Nav";

function Home() {
    return (
        <div>
            <Nav />
            <div class="intro">
                {/* <img className="profile" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" /> */}
                <h3>Logo</h3>
                <h3 class="intro__text">Hello My name is Hitesh</h3>
                <hr />
            </div>
        </div>
    )
}

export default Home
