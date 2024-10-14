import "./article.css"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import CodeBlock from "./CodeBlock";

function Article() {
    const [articleItem, setArticleItem] = useState([]);
    const [authorName, serAuthorName] = useState([]);

    // Get title from URL
    const { title } = useParams();
    
    useEffect(() => {
        const fetchArticleItem = async () => {
            try {
                const response = await fetch(`https://raw.githubusercontent.com/BinL233/my_docs/refs/heads/main/${title}/${title}.md`);
                const data = await response.text();
                setArticleItem(data);
            } catch (error) {
                console.error('Error fetching article item:', error);
            }
        };

        fetchArticleItem();
    }, [title]);

    useEffect(() => {
        const fetchAuthorName = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/user/${articleItem.AuthorId}`);
                const data = await response.json();
                serAuthorName(data);
            } catch (error) {
                console.error('Error fetching article author:', error);
            }
        };

        // fetchAuthorName();
    }, [articleItem.AuthorId]);

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
                    {/* <h1 className="article_title" style={{fontSize: '2em'}}>{articleItem.Title}</h1> */}
{/* 
                    <p id="article" className="details">
                        <span>Published at</span>
                        <span>{formatDate(articleItem.PublishedAt)}</span>
                        <span>   ·   </span>
                        <span>{articleItem.Views}</span>
                        <span>views</span>
                    </p> */}

                    {/* <p id="article" className="author_name">
                        <span>Author:</span> <span className="author_user_name">{authorName}</span>
                    </p> */}

                    <div class="horizontal-line"></div>

                    <p id="article">
                        <ReactMarkdown className="markdown" renderers={{ code: CodeBlock }}>{articleItem}</ReactMarkdown>
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