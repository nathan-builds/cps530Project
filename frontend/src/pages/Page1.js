import React, { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';


const Page1 =()=>{
    const file_name = 'p1_flask.md';
    const [post, setPost] = useState('');

    useEffect(() => {
        import(`./writeups/${file_name}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });

    return (
        <div className="container">
            <Markdown>
                {post}
            </Markdown>
        </div>
    );
}

export default Page1;
