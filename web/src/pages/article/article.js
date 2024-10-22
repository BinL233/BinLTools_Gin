import "./article.css"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MarkdownRenderer from '../../components/markdownRenderer/markdownRenderer.js'

function Article() {
    const [articleInfo, setArticleInfo] = useState([]);
    const [articleRawData, setArticleRawData] = useState([]);
    const [articleItems, setArticleItems] = useState([]);

    // Get title from URL
    const { title } = useParams();

    useEffect(() => {
        const fetchArticleItems = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/BinL233/my_docs/refs/heads/main/directory.json');
                const data = await response.json();
                setArticleItems(data);
            } catch (error) {
                console.error('Error fetching article items:', error);
            }
        };
        fetchArticleItems();
    });
    
    useEffect(() => {
        const fetchArticleRawData = async () => {
            try {
                const response = await fetch(`https://raw.githubusercontent.com/BinL233/my_docs/refs/heads/main/${title}/${title}.md`);
                const data = await response.text();
                setArticleRawData(data);
            } catch (error) {
                console.error('Error fetching article item:', error);
            }
        };

        const fetchArticleInfo = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/BinL233/my_docs/commits?path=${title}/${title}.md`);
                const data = await response.json();
                setArticleInfo(data);
            } catch (error) {
                console.error('Error fetching article author:', error);
            }
        };

        fetchArticleInfo();
        fetchArticleRawData();
    }, [title]);

    function formatDate(dateString) {
        const date = new Date(dateString);
    
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const month = monthNames[date.getUTCMonth()];
    
        const getDaySuffix = (day) => {
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };
    
        return `${month} ${day}${getDaySuffix(day)}, ${year}`;
    }

    return (
        <div className="article">
            {/* Import Header */}
            <div>
                { Header() }
            </div>

            <div id="article" className="container">
                <section id="article" className="module">
                    <h1 className="article_title" style={{fontSize: '2em'}}>{articleItems?.kueue?.title}</h1>

                    <p id="article" className="details">
                        <span>Edited at</span>
                        <span>{formatDate(articleInfo[0]?.commit?.author?.date)}</span>
                        {/* <span>   ·   </span>
                        <span>{articleItem.Views}</span>
                        <span>views</span> */}
                    </p>

                    <p id="article" className="author_name">
                        <span>Author:</span> <span className="author_user_name">{articleItems?.kueue?.author}</span>
                    </p>

                    <div class="horizontal-line"></div>

                    <p id="article">
                        <MarkdownRenderer className="markdown" content={articleRawData} />
                    </p>
                </section>
            </div>

            {/* Import Footer */}
            <div>
                { Footer() }
            </div>
        </div>
    )
}

export default Article;
