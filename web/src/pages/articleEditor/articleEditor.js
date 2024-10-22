import "./articleEditor.css"
import Header from "../../components/header/header.js"
import Footer from "../../components/footer/footer.js"
import React, { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';

function ArticleEditor() {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [category, setCategory] = useState('');
    const [markdownText, setMarkdownText] = useState('');
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/article/post_article', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'title': title,
                    'tags': tags,
                    'category': category,
                    'markdownText': markdownText,
                })
            });

            if (response.headers.get('content-type')?.includes('application/json')) {
                const data = await response.json();
                if (response.ok) {
                    console.log("Article was submitted successful:", data);
                    setMessage("Submitted successful");
                } else {
                    console.error("Article submit failed:", data.msg);
                    setMessage(data.msg || "Submit failed due to unknown error.");
                }
            } else {
                const text = await response.text();
                console.error("Unexpected response format:", text);
                setMessage("An error occurred. Please try again later.");
            }

        } catch (error) {
            console.error('Error during submit:', error);
            setMessage("An error occurred. Please try again later.");
        }
    };

    const handleInputChange = (event) => {
        setMarkdownText(event.target.value);
    };

    return (
        <div className="articleEditor">
            {/* Import Header */}
            <div>
                { Header() }
            </div>

            <div className="article_editor_div">
                <h2>Article Editor</h2>

                {/* Title */}
                <div className="editor-section">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Title"
                    />
                </div>

                {/* Category */}
                <div className="editor-section">
                    <label htmlFor="category">Category</label>
                    <select
                        id="category"
                        value={category}
                        style={{ height: '40px'}}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Choose Category</option>
                        <option value="Tech">Tech</option>
                    </select>
                </div>

                {/* Tags */}
                <div className="editor-section">
                    <label htmlFor="tags">Tags</label>
                    <input
                        type="text"
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Enter tags separated by commas(,)"
                    />
                </div>

                {/* Content */}
                <div className="editor-section">
                    <label htmlFor="content">Content</label>
                    {/* input */}
                    <TextareaAutosize
                        minRows={3}
                        value={markdownText}
                        onChange={handleInputChange}
                        placeholder="Enter your markdown here..."
                        style={{ width: '100%', padding: '10px', fontSize: '16px', textAlign: 'left' }}
                    />
                    
                    {/* Markdown preview */}
                    <div className="preview-section">
                        <ReactMarkdown>{markdownText}</ReactMarkdown>
                    </div>
                </div>

                {/* Submit */}
                <button id="article_editor" className="submit_button" onClick={handleSubmit}>Submit</button>

                <p>{message}</p>

            </div>

            {/* Import Footer */}
            <div>
                { Footer() }
            </div>
        </div>
    )
}

export default ArticleEditor;