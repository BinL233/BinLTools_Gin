import React, { useEffect } from 'react';
import "./header.css"
import $ from 'jquery';
// import ReactLive2d from 'react-live2d';

function Header() {
    useEffect(() => {
        const loadModule = () => {
            const initializeViewer = () => {
                var config = {
                    right: '0px',
                    bottom: '-5px',
                    width: 350,
                    height: 350,
                    basePath: '/Resources',
                    role: 'Domino',
                    opacity: 1,
                    mobile: false
                };

                var v = new window.L2DViewer(config);
                console.log('L2DViewer instance created', v);
            };

            if (typeof window.L2DViewer !== 'undefined') {
                initializeViewer();
            } else {
                console.error('L2DViewer is not defined');
            }
        };

        if (document.readyState === 'complete') {
            loadModule();
        } else {
            window.addEventListener('load', loadModule);
            return () => {
                window.removeEventListener('load', loadModule);
            };
        }
            // $(document).ready(function() {
            //     headerShadow();
            // });

        function headerShadow() {
            var header = $('header');
        
            $(window).scroll(function(e){
                if(header.offset().top > 0){
                    if(!header.hasclass('shadow')){
                        header.addclass('shadow');
                    }
                }else{
                    header.removeclass('shadow');
                }
            });
        }

        loadModule();

    }, []);

    return (
        <div className="header">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet' />
            <link rel="icon" href="/static/images/BinLTools_logo.ico" type="image/x-icon" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
            <link rel="stylesheet" herf="style.css" />
            <link rel="stylesheet" href="/static/css/live2d.css" />
            
            <header>
                <div className="container">
                    <div id="branding">
                        <h1><a id="header_logo" href="/"><span className="highlight">BinL</span>Tools</a></h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/about_me">About Me</a></li>
                            <li><a href="https://github.com/BinL233">GitHub</a></li>
                            {/* TODO: Need to link to backend */}
                            <li><a href="/login"></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="l2d"  id="L2d" >
                <div id="L2dCanvas" className="Canvas"></div>
            </div>
        </div>
    )
}

export default Header;