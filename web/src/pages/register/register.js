import React, { useState, useRef, useEffect } from "react";
import "./register.css";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";

function Register() {
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [cpwd, setCpwd] = useState("");
    const [message, setMessage] = useState("");
    const userRef = useRef(null);
    const pwdRef = useRef(null);
    const cpwdRef = useRef(null)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/user/register_process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'user': user,
                    'pwd': pwd,
                    'cpwd': cpwd
                })
            });

            // 检查响应的内容，不先解析为 JSON
            const textResponse = await response.text(); // 获取原始文本响应
            console.log('Raw response:', textResponse);  // 打印后端返回的原始响应

            if (response.headers.get('content-type')?.includes('application/json')) {
                const data = await response.json();
                if (response.ok) {
                    console.log("Register successful:", data);
                    setMessage("Register successful");
                    window.location.href = '/login';
                } else {
                    console.error("Register failed:", data.msg);
                    setMessage(data.msg || "Register failed due to unknown error.");
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
            case "Password cannot less than 6":
                pwdRef.current.style.boxShadow = '0 2px 10px 2px #FF0056';
                userRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                cpwdRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                break;

            case "two Password fields not match":
                pwdRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                userRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                cpwdRef.current.style.boxShadow = '0 2px 10px 2px #FF0056';
                break;

            case "Invalid username format: The length of username only accepts 5 to 20":
                userRef.current.style.boxShadow = '0 2px 10px 2px #FF0056';
                pwdRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                cpwdRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                break;

            case "Invalid username format: Username only accepts letters, numbers and underline":
                userRef.current.style.boxShadow = '0 2px 10px 2px #FF0056';
                pwdRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                cpwdRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                break;

            case "Name exist":
                userRef.current.style.boxShadow = '0 2px 10px 2px #FF0056';
                pwdRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                cpwdRef.current.style.boxShadow = '0 2px 10px 2px #999999';
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        error_notifier();
    }, [message]);

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
                                        ref={userRef}
                                        onChange={(e) => setUser(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        name="pwd"
                                        value={pwd}
                                        ref={pwdRef}
                                        onChange={(e) => setPwd(e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        name="cpwd"
                                        value={cpwd}
                                        ref={cpwdRef}
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
        </div>
    );
}

export default Register;
