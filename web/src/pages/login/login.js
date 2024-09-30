import React, { useState, useRef, useEffect } from "react";
import "./login.css";
import "./../../components/inputBox/inputBox.css"
import "./../../components/buttons/button1.css"
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";

function Login() {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [message, setMessage] = useState("");
    const userRef = useRef(null);
    const pwdRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://bintools_backend:8080/api/user/login_process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'user': user,
                    'pwd': pwd
                })
            });

            if (response.headers.get('content-type')?.includes('application/json')) {
                const data = await response.json();
                if (response.ok) {
                    console.log("Login successful:", data);
                    setMessage("Login successful");
                    localStorage.setItem('token', data.token);
                    window.location.href = '/';
                } else {
                    console.error("Login failed:", data.msg);
                    setMessage(data.msg || "Login failed due to unknown error.");
                }
            } else {
                const text = await response.text();
                console.error("Unexpected response format:", text);
                setMessage("An error occurred. Please try again later.");
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage("An error occurred. Please try again later.");
        }
    };

    function error_notifier() {
        switch (message) {
            case "Username cannot be null":
                userRef.current.style.boxShadow = '0 2px 10px 2px #FF0056';
                pwdRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                break;

            case "Username not exist":
                userRef.current.style.boxShadow = '0 2px 10px 2px #FF0056';
                pwdRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                break;

            case "Password cannot be null":
                pwdRef.current.style.boxShadow = '0 2px 10px 2px #FF0056';
                userRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                break;

            case "Incorrect password":
                pwdRef.current.style.boxShadow = '0 2px 10px 2px #FF0056';
                userRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        error_notifier();
    }, [message]);

    return (
        <div className="login">
            {/* Import Header */}
            <div>
                <Header />
            </div>

            <div className="frame">
                <div className='login_sub'>
                    <div className='title'>Login</div>
                    <div className='biao'>
                        <form id="myForm" onSubmit={handleSubmit}>
                            <div id="boxs">
                                <div className="box1">
                                    <label>Username: </label>
                                    <label>Password: </label>
                                </div>
                                <div className="box2">
                                    <input className="inputBox" id="username"
                                        type="text"
                                        name="user"
                                        value={user}
                                        ref={userRef}
                                        onChange={(e) => setUser(e.target.value)}
                                    />
                                    <input className="inputBox" id="password"
                                        type="password"
                                        name="pwd"
                                        value={pwd}
                                        ref={pwdRef}
                                        onChange={(e) => setPwd(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="container2">
                                <button type="submit" className="button1">
                                    <div className="button1__line"></div>
                                    <div className="button1__line"></div>
                                    <span className="button1__text">Login</span>
                                </button>
                                <p><a href="/register" id="go_to_register">I don't have an account. I want to sign up!</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Import Footer */}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Login;
