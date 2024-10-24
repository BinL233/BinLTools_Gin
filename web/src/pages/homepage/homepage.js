import "./homepage.css"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import React, { useEffect, useState } from 'react';
import logoImage from '../../resources/images/logo.png';
import { useNavigate } from 'react-router-dom';


function HomePage() {
    const [articleItems, setArticleItems] = useState([]);

    useEffect(() => {
        // Real time clock
        function Timer() {
            setInterval(function(){myTimer()},1);
            var clock = document.getElementById("timer")

            function myTimer() {
                var d=new Date();
                var t=d.toLocaleTimeString();
                clock.innerHTML=t;
                clock.style.color = "#c7437ccd"
                clock.style.fontWeight = "bold"
                clock.style.fontFamily = "Open Sans"
            }
        }

        const fetchArticleItems = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/BinL233/my_docs/refs/heads/main/directory.json');
                const data = await response.json()
                setArticleItems(data);
            } catch (error) {
                console.error('Error fetching menu article items:', error);
            }
        };

        fetchArticleItems();
        Timer();
    }, []);

    return (
        <div className="homepage">
            {/* Import Header */}
            <div>
                { Header() }
            </div>

            {/* Logo */}
            <div className="logo_main">
                <p className="logo_p"> 
                    <img id="logo_image" src={logoImage} alt="Logo" />
                </p>
            </div>

            {/* Timer */}
            <div id="timer" className="timer">
                <p id="timer_s" className="timer_s"></p>
            </div>

            <h3 className="category_title_h3">
                    Applications & Tools
            </h3>

            {/* menu */}
            <div id="menu" className="menu">
                {/* page links */}
                <div id="div_menu">    
                    <br />
                    <p className="menu_p">
                        <a className="menu_links" href="https://testflight.apple.com/join/TfxHXkvb">Revive - Focus Timer for iOS</a>
                        </p>
                    <p className="menu_p1">
                        <a className="menu_links" href="/api/download/No_Death_Clear_0.8.3.exe">No Death Clear - Soul-like RPG Demo (Windows OS only) </a>
                        </p>
                    <p className="menu_p">
                        <a className="menu_links" href="/reaction_test">ReactionTest</a>
                        </p>
                    <p className="menu_p">
                        <a className="menu_links" href="/digit_converter">DigitConverter</a>
                        </p>
                    <p className="menu_text2">Creating...</p>
                    <br />
                </div>
            </div>

            <br />

            <h3 className="category_title_h3">
                    Articles
            </h3>

            <div id="menu" className="menu">
                {/* blog links */}
                <div id="div_menu">  
                    <br />
                    {articleItems && Object.keys(articleItems).map(key => (
                        <p className="article_menu_p" key={key}>
                            <a className="menu_links" href={`/article/${key}`}>
                                { articleItems[key]?.title }
                            </a>
                            <div className="article_menu_tags">
                                { articleItems[key]?.tags && articleItems[key]?.tags.map((tag, index) => (
                                    <p className="article_menu_tag" key={index}>
                                        {`#${tag}`} 
                                    </p>
                                ))}
                            </div>
                        </p>
                    ))}
                    <br />
                </div> 
            </div>

            <div className="notice">
                <p className="notice_text">ps. Live2D needs to be loaded when you enter the website for the first time, please wait for about 15 seconds.</p>
            </div>

            {/* Introduction */}
            <div id="homepage" className="intro">
                    <p className="title">About Author</p>
                    <p className="text">
                        Hello everyone! I'm BinL, the producer of this website <br />
                        <br />
                        This website is under construction starting from June 2022... <br />
                        <br />
                        More useful and interesting little features will be added in the future!
                    </p>
            </div>

            {/* Import Footer */}
            <div>
                { Footer() }
            </div>
        </div>
    );
}

export default HomePage;
