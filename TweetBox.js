import React from 'react';
import {Button, Avatar} from "@material-ui/core";
import './TweetBox.css';
function TweetBox() {
    return(
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1247265119391924231/Fk8VU2cV_400x400.jpg"></Avatar>
                    <input placeholder="Que está pasando?" type="text"></input>
                </div>
                <input className="tweetBox__imageImput" 
                    placeholder="Introduce dirección URL de imagen" type="text"></input>

                <Button variant="outlined" className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;