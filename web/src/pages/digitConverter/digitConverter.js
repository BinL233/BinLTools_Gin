import "./digitConverter.css"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import logoImage from "../../resources/images/DigitConverter_logo.png";
import React, { useState } from "react";

function DigitConverter() {
    const [input, setInput] = useState("");
    const [fromBase, setFromBase] = useState("2");
    const [toBase, setToBase] = useState("10");
    const [output, setOutput] = useState("");

    const handleConvert = () => {
        const isValid = (input, base) => {
            var regex;
            if (base < 10) {
                regex = new RegExp(`^[0-${base - 1}]+$`);
            } else {
                regex = new RegExp(`^[0-9 a-f]+$`)
            }
            return regex.test(input);
        };

        if (!isValid(input, parseInt(fromBase))) {
            setOutput('Invalid input');
            return;
        }
        
        let decimalNum = parseInt(input, parseInt(fromBase));
        if (toBase === "10") {
            setOutput(decimalNum.toString());
        } else if (toBase === "8") {
            setOutput(decimalNum.toString(8));
        } else if (toBase === "16") {
            setOutput(decimalNum.toString(16));
        } else {
            setOutput(decimalNum.toString(2));
        }
    };

    return (
        <div className="digitConverter">
            {/* Import Header */}
            <div>
                { Header() }
            </div>

            {/* Logo */}
            <div className="logo_main">
                <p id="digit_converter" className="logo_p"> 
                    <img id="logo_image" src={logoImage} alt="Logo" />
                </p>
            </div>

            <div id="function">
                <form id="convert" autocomplete="off">
                    <div className="form-group">
                        <label htmlFor="input">Input number</label>
                        <input type="text" id="input" name="input" className="form-control form-control-lg" required autofocus value={ input } onChange={(e) => setInput(e.target.value)} />
                    </div>

                    <div id="flex-container">
                        <div className="form-group-flex">
                            <label for="sel1">From: </label>
                            <select name="sel1" id="sel1" className="form-control" value={ fromBase } onChange={ (e) => setFromBase(e.target.value) }>
                                <option value="2" selected>binary</option>
                                <option value="8">octal</option>
                                <option value="10">decimal</option>
                                <option value="16">hex</option>
                            </select>
                        </div>

                        <div className="form-group-flex">
                            <label for="sel2">To: </label>
                            <select name="sel2" id="sel2" className="form-control" value={toBase} onChange={(e) => setToBase(e.target.value)}>
                                <option value="2">binary</option>
                                <option value="8">octal</option>
                                <option value="10" selected>decimal</option>
                                <option value="16">hex</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="button2" type="button" title="Convert" onClick={handleConvert}>Convert</button>
                    </div>

                    <div className="form-group">
                        <label for="output" id="output_label">Result number</label>
                        <textarea rows="2" id="output" className="form-control form-control-lg" value={output} readonly></textarea>
                    </div>
                </form>
            </div>

            {/* Import Footer */}
            <div>
                { Footer() }
            </div>

        </div>
    );
}

export default DigitConverter;