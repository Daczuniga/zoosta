import React from 'react';
import './Post.css';
import Picture from '../../assets/zoosta1.png';
import Creek from './client/src/assets/creek1.webp';
import CuteBar from './client/src/assets/cute_bar.jpeg';


function Post() {
    return (
        <div className="post">
            <div class= "bubble">
                <div className="image">
                        <img src={Picture} alt="foto"/>
                <div className='texts'>
                    <h2>
                        Post-test
                    </h2>
                    <p className='info'>
                        <a className='author'>Name of author</a>
                        <time>2023-06-05 14:57</time>
                    </p>
                    <p className='summary'>
                        Blah blah blaaaaaaaaaaaaaaaaaaaaaaaa
                        blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah
                        
                    </p>
                </div>
            </div>
        </div>
        <div className="post">
            <div class="bubble">
                <div className="image">
                    <img src={Picture} alt="foto"/>
                </div>
                <div className='texts'>
                <h2>
                        Post-test
                    </h2>
                    <p className='info'>
                        <a className='author'>Name of author</a>
                        <time>2023-06-05 14:57</time>
                    </p>
                    <p className='summary'>
                        Blah blah blaaaaaaaaaaaaaaaaaaaaaaaa
                        blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaah
                        
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Post;