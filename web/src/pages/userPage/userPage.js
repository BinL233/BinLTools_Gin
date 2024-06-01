import "./userPage.css"
import React, { useEffect, useState } from 'react';
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"

function UserPage() {
    const [userContent, setUserContent] = useState({});

    function EditID(value) {
        if (value.length < 7) {
            return "0".repeat(7 - value.length) + value;
        }
        return value;
    }

    function Logout() {
        fetch('/api/user/logout_process', {
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
        fetch('/api/user/login')
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

                {/* <div id="main_panel">
                    <div className="info_container">
                        <p className="info"></p>
                    </div>
                </div> */}

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
        </div>
    );
}

export default UserPage;