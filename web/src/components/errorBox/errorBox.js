import "./errorBox.css"
import React from "react";

const ErrorBox = ({message}) => { 
    return (
        <div className="error_box">
            <div id="container">
                <div id="error-box">
                    <div className="dot"></div>
                    <div className="dot two"></div>
                    <div className="face2">
                        <div className="eye"></div>
                        <div className="eye right"></div>
                        <div className="mouth sad"></div>
                    </div>
                    <div className="shadow move"></div>
                    <div className="message"><h1 className="alert">Error!</h1><p>{message}</p></div>
                    <button className="button-box"><h1 className="red">try again</h1></button>
                </div>
            </div>
        </div>
    );
}

export default ErrorBox;