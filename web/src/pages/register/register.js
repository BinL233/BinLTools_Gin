import React, { useState } from "react";
import "./register.css";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";
import ErrorBox from "../../components/errorBox/errorBox.js";

function Register() {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("/api/user/register_process", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                user: user,
                pwd: pwd,
                cpwd: cpwd,
            }),
        });

        const data = await response.json();
        if (response.ok) {
            setMessage(`Register successful! Token: ${data.token}`);
        } else {
            setMessage(data.message || "Register failed");
        }
    };

    return (
        <div className="register">
            {/* Import Header */}
            <div>
                <Header />
            </div>

            <div className="frame">
                <div className='register_sub'>
                    <div className='title'>Register</div>
                    <div className='biao'>
                        <form id="myForm" onSubmit={handleSubmit}>
                            <div id="boxs">
                                <div className="box1">
                                    <label>Username: </label>
                                    <label>Password: </label>
                                    <label>Confirm Password: </label>
                                </div>
                                <div className="box2">
                                    <input
                                        type="text"
                                        name="user"
                                        value={user}
                                        onChange={(e) => setUser(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        name="pwd"
                                        value={pwd}
                                        onChange={(e) => setPwd(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        name="cpwd"
                                        value={cpwd}
                                        onChange={(e) => setCpwd(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="container2">
                                <button type="submit" className="button">
                                    <div className="button__line"></div>
                                    <div className="button__line"></div>
                                    <span className="button__text">Register</span>
                                </button>
                                <p><a href="/login" id="go_to_login">I already had an account. I want to login!</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Import Footer */}
            <div>
                <Footer />
            </div>

            {/* Import errorBox */}
            <div id="error_box">
                {<ErrorBox message={message} />}
            </div>
        </div>
    );
}

export default Register;
