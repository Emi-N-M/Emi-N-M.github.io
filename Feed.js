import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox.js';
import Post from './Post';

function Feed() {
    return(
        <div className="feed">
            {/* {Header} */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* {TweetBox} */}
            <TweetBox />

            {/* {Post} */}
            <Post displayName="Emilito69" userName="@Emi-N-M" 
            avatar="https://pbs.twimg.com/profile_images/1247265119391924231/Fk8VU2cV_400x400.jpg"/>

        </div>
    )
}

export default Feed;