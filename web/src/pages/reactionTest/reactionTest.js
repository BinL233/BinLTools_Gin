import React, { useState, useEffect } from 'react';
import Footer from "../../components/footer/footer.js"
import "./reactionTest.css"

var num = Math.ceil(Math.random()*5);
var flag = 0;
var beginTime = 0;
var endTime = 0;

function ReactionTest() {
    const [reactionText, setReactionText] = useState("Click Here");
    const [reactionColor, setReactionColor] = useState("#57F15C");
    const [ranks, setRanks] = useState([]);

    useEffect(() => {
        fetch('http://bintools_backend:8080/api/reaction/reaction_test_rank')
            .then(response => response.json())
            .then(data => setRanks(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const ChangeColor = () => {
        if (flag === 1) {
            endTime = +new Date();
            setReactionColor("#57F15C");
            setReactionText(`${endTime - beginTime} ms`);

            // Send "reactionB" value to the backend
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/api/reaction/handle_reaction_b", true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send("reactionB=" + encodeURIComponent(`${endTime - beginTime} ms`));
        } else if (flag === 0) {
            setReactionColor("#57F15C");
            setReactionText("Wait...");
            setTimeout(() => {
                setReactionColor("#E0457B");
                setReactionText("Click!");
                beginTime = +new Date();
            }, num * 1000 + 1000);
        } else if (flag === 2) {
            window.location.reload();
        }

        flag++;
    };

    return (
        <div className="reactionTest">
            <div id="reaction_button" className="container">
                <p>           
                    <button onClick={ ChangeColor } id="reactionB" style={{ background: reactionColor }}>
                        { reactionText }
                    </button>
                </p>
                <p>You can refresh current page by clicking on the green area again after the test :)</p>
            </div>

            <div id="rank" className="container">
                <div if="rank_title">
                    <p><label id="rank_title">Rank</label></p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ranks.map((rank) => (
                            <tr key={rank.id} style={{ textAlign: 'center' }}>
                                <td>{rank.id}</td>
                                <td>{rank.userName}</td>
                                <td>{rank.score} ms</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            

            {/* Import Footer */}
            <div>
                { Footer() }
            </div>
        </div>
    );
}

export default ReactionTest;