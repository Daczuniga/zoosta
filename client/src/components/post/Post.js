import React from "react";
import "./Post.css";
import Picture from "../../assets/zoosta_1.mp4";
import { useMutation } from "@apollo/client";
import creek1 from "../../assets/creek1.webp";
import cuteBar from "../../assets/cute_bar.jpeg";
import ProfilePosts from "../profile/profilePosts";
import Map from "./Map.js";

export default function Post() {
  return (
    <div className="post">
      <div className="bubble">
        <div className="image">
          <img src={creek1} alt="foto" />
        </div>
        <div className="texts">
            <h2>Cute Hidden Creek Near Park Trail!</h2>
            <p className="info">
              <a className="author">Henry Smith</a>
              <time>2023-06-05 14:57</time>
            </p>
            <p className="summary">
              I walking on the park trail when I went off-trail half a mile in
              and found this beautiful creek! It is near the fallen tree by the
              painted bridge! highly recommend :)
            </p>
            <div className="comments">
                <div className="form" >
                    <form>
                        <div>
                       Add comments
                        </div>
                        <div>
                            <input type="text" name="comment" placeholder="i love it!"/>
                            <input type="submit" value="submit"/>
                        </div>
                    </form>

                </div>
            </div>
          </div>
      </div>
      <div>
        <Map />
        <ProfilePosts/>
      </div>

     
        {/* <div className="post">
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
                        I was among the neighborhod, so who wouldve guessed this was here! Definetly will be coming back the drinks were expensive, but definitely worth it
                        
                    </p>
                </div>
            </div>
        </div>
        <div>
        <Map/>
        </div>
        <br/>
        <br/>
        <ProfilePosts/> */}
    </div>
  );
}
