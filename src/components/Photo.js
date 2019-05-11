import React from "react";
import { Image, Card } from "reakit";


function Photo(props) {
  const post = props.post
  return (
    <div className="imagewall">
      <Card>
        <Card.Fit
          className="photo"
          use={Image}
          src={props.post.imageLink}
          alt="photo"
          width={350}
          height={350}
          border-radius={50}
        />
          <figcaption className="button-container">
            {" "}
            <p>{props.post.description}</p>{" "}
          </figcaption>
          <div className="button-container">
          <button onClick = {() => {
            props.onPhotoRemoved(post)
          }}>Remove</button>
        </div>
      </Card>
    </div>
  );
}

export default Photo;
