import "./homepage.css"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import React, { useEffect } from 'react';
import logoImage from '../../resources/images/logo.png';


function HomePage() {
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
                <p className="menu_p"> 
                    <img id="logo_image" src={logoImage} alt="Logo" />
                </p>
            </div>

            {/* Timer */}
            <div id="timer" className="timer">
                <p id="timer_s" className="timer_s"></p>
            </div>

            {/* menu */}
            <div id="menu" className="menu">
                {/* page links */}
                <div id="div menu">    
                    <br />
                    <p className="menu_p">
                        <a className="menu_links" href="https://testflight.apple.com/join/TfxHXkvb">Revive - Focus Timer for iOS</a>
                        </p>
                    <p className="menu_p1">
                        <a className="menu_links" href="/api/download/No_Death_Clear_0.8.3.exe">No Death Clear</a>
                        </p>
                    <p className="menu_p2">
                        <a className="menu_text">自制魂系游戏，速速下载！</a>
                        </p>
                    <p className="menu_p">
                        <a className="menu_links" href="/reaction_test">反应测试 ReactionTest</a>
                        </p>
                    <p className="menu_p">
                        <a className="menu_links" href="/digit_converter">进制转换器 DigitConverter</a>
                        </p>
                    <p className="menu_text2">持续更新中...</p>
                    <br />
                </div>
            </div>

            <div className="notice">
                <a className="notice_text">ps.第一次进入网站Live2D需要加载，请耐心等待15s哦～</a>
            </div>

            {/* Introduction */}
            <div className="intro">
                    <a className="title">关于作者</a>
                    <p className="text">
                        大家好！我是BinL。本网站的制作人。<br />
                        <br />
                        本网站从2022年6月开始慢慢建设中......<br />
                        <br />
                            今后将添加更多有用有趣的小功能！
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