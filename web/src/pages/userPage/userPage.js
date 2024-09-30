import "./userPage.css"
import React, { useEffect, useRef, useState, useCallback } from 'react';
import "./../../components/inputBox/inputBox.css"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"

function UserPage() {
    const [userContent, setUserContent] = useState({});
    const [showModel, setShowModel] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const userRef = useRef(null);

    function EditID(value) {
        if (value.length < 7) {
            return "0".repeat(7 - value.length) + value;
        }
        return value;
    }

    function handleChangeUsername() {
        setShowModel(true);
    }

    function handleCloseModel() {
        setShowModel(false);
    }


    async function handleSaveUsername() {
        try {
            const response = await fetch('http://localhost:8080/api/user/change_username', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'user': newUsername,
                })
            });

            if (response.headers.get('content-type')?.includes('application/json')) {
                const data = await response.json();
                if (response.ok) {
                    console.log("username changed successful:", data);
                    setMessage("username changed successful");
                    setError(false);
                    window.location.href = '/user_page';
                } else {
                    console.error("username changed failed:", data.msg);
                    setMessage(data.msg || "username changed failed due to unknown error.");
                    setError(true);
                }
            } else {
                const text = await response.text();
                console.error("Unexpected response format:", text);
                setMessage("An error occurred. Please try again later.");
                setError(true)
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage("An error occurred. Please try again later.");
            setError(true)
        }

        console.log('New username:', newUsername);

        if (!error) {
            setShowModel(false);
        }
    }

    const error_notifier = useCallback(() => {
        if (error) {
            userRef.current.style.boxShadow = '0 2px 10px 2px #FF0056';
        }
    }, [error]);

    useEffect(() => {
        error_notifier();
    }, [message, error_notifier]);

    function Logout() {
        fetch('http://localhost:8080/api/user/logout_process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })

        .then(response => {
            if (response.ok) {
                console.log('User logged out');
                window.location.href = '/';
            } else {
                console.error('Logout failed');
            }
        })
        .catch(error => {
            console.error('Error during logout:', error);
        });
    }

    useEffect(() => {
        // Get login data from backend
        fetch('http://localhost:8080/api/user/login')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("Login data received:", data);
                data.id = EditID(data.id)
                setUserContent(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="user_page">
            {/* Import Header */}
            <div>
                { Header() }
            </div>

            <div className="main_container">
                <div id="user_name">
                    <p className="xxlarge_text">{userContent.username}</p>
                    <p className="medium_text">#{userContent.id}</p>
                </div>

                <div id="main_panel">
                    <div className="info_container">
                        <br />
                        <p className="info">
                            <button className="change_name" onClick={handleChangeUsername}>
                                Change User Name
                            </button>
                        </p>
                        <br />
                    </div>
                </div>

                <div id="log_out">
                    <button className="log_out" type="button" title="Logout" onClick={Logout}>
                        Logout
                    </button>
                </div>
            </div>

            {/* Import Footer */}
            <div>
                { Footer() }
            </div>

            {showModel && (
                <div className="model">
                    <div className="model_content">
                        <h2>Change User Name</h2>
                        <input
                            type="text"
                            value={newUsername}
                            ref={userRef}
                            onChange={(e) => setNewUsername(e.target.value)}
                            placeholder="Enter new username"
                        />
                        <div id="buttons">
                            <button className="change_name" onClick={handleSaveUsername}>Save</button>
                            <button className="log_out" onClick={handleCloseModel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserPage;