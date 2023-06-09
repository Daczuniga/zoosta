import React from 'react';
import './Post.css';
import Picture from '../../assets/zoosta1.png';
import creek1 from '../../assets/creek1.webp';
import cuteBar from '../../assets/cute_bar.jpeg';


function Post() {
    return (
        <div className="post">
            <div className= "bubble">
                <div className="image">
                        <img src={creek1} alt="foto"/>
                <div className='texts'>
                    <h2>
                        Cute Hidden Creek Near Park Trail!
                    </h2>
                    <p className='info'>
                        <a className='author'>Henry Smith</a>
                        <time>2023-06-05 14:57</time>
                    </p>
                    <p className='summary'>
                        
                        I walking on the park trail when I went off-trail half a mile in and found this beautiful creek!

                        It is near the fallen tree by the painted bridge! highly recommend :)
                        
                    </p>
                </div>
            </div>
        </div>
        <div className="post">
            <div className="bubble">
                <div className="image">
                    <img src={cuteBar} alt="foto"/>
                </div>
                <div className='texts'>
                <h2>
                        Awesome New Bar @ State Street!
                    </h2>
                    <p className='info'>
                        <a className='author'>Elizabeth Gonzalez</a>
                        <time>2023-06-05 14:57</time>
                    </p>
                    <p className='summary'>
                        I was out with friends on the weekend when we happened to stumble across this cool speakeasy!
                        I was among the neighborhod, so who wouldve guessed this was here! 
                        Definetly will be coming back the drinks were expensive, but definitely worth it!

                        
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Post;