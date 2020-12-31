import React from 'react';
import './Post.css';
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Post({displayName, userName, verefied, timeStamp, text, avatar}) {
    return(
        <div className="post">
            <div className="postAvatar"> 
            <Avatar src={avatar} />
            </div>
            <div className="postContent">
                <div className="postContent__displayName">
                <h2>{displayName}</h2>
                <VerifiedUserIcon className="postHeader__verified" />
                <h3>{userName}</h3> 
                </div>                
                <div className="postContent__textBox">

                    
                </div>
                <p className="postContent__text">asdadasdasdasd</p>

            </div>
        </div>
    )
}

export default Post;