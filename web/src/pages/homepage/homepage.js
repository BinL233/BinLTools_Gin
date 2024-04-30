import "./homepage.css"
import React, { useEffect } from 'react';


function HomePage() {
    useEffect(() => {
        // Real time clock
        function Timer() {
            var myVar=setInterval(function(){myTimer()},1);
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
            {/* Timer */}
            <div id="timer" class="timer">
                <p id="timer_s" class="timer_s"></p>
            </div>

            {/* menu */}
            <div id="menu" class="menu">
                {/* page links */}
                <div id="div menu">    
                    <br />
                    <p class="menu_p">
                        <a class="menu_links" href="https://testflight.apple.com/join/TfxHXkvb">Revive - Focus Timer for iOS</a>
                        </p>
                    <p class="menu_p1">
                        <a class="menu_links" href="/download/No_Death_Clear_0.8.3.exe">一命通关 No Death Clear</a>
                        </p>
                    <p class="menu_p2">
                        <a class="menu_text">自制魂系游戏，速速下载！</a>
                        </p>
                    <p class="menu_p">
                        <a class="menu_links" href="/reaction_test">反应测试 ReactionTest</a>
                        </p>
                    <p class="menu_p">
                        <a class="menu_links" href="/digit_converter">进制转换器 DigitConverter</a>
                        </p>
                    <p class="menu_text2">持续更新中...</p>
                    <br />
                </div>
            </div>

            <div class="notice">
                <a class="notice_text">ps.第一次进入网站Live2D需要加载，请耐心等待15s哦～</a>
            </div>

            {/* Introduction */}
            <div class="intro">
                    <a class="title">关于作者</a>
                    <br />
                <br />
                <br />
                    <p class="text">
                        大家好！我是BinL。本网站的制作人。<br />
                        <br />
                        本网站从2022年6月开始慢慢建设中......<br />
                        <br />
                            今后将添加更多有用有趣的小功能！
                    </p>
            </div>
        </div>
    );
}

export default HomePage;