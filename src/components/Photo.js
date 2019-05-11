import React from "react";
import { Image, Card } from "reakit";

function Photo(props) {
  return (
    <div className="imagewall">
      <Card >
        <Card.Fit className="photo"
          use={Image}
          src={props.post.imageLink}
          alt="photo"
          width={450}
          height={450}
          border-radius={50}
        />
      </Card>
    <button>Remove</button>
    </div>
  );
}

export default Photo;
