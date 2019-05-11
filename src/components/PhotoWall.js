import React from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";

function PhotoWall(props) {
  console.log(props);

  return (
    <div className="App d-flex flex-column">
    <div className="d-flex justify-content-center">
      <Link to="/addphoto">
        <AwesomeButton className='aws-btn' size="icon" type="secondary">
        <i className="far fa-plus-square"></i>
        </AwesomeButton>
      </Link>
      </div>
      {props.posts.map(post => (
        <Photo
          key={post.id}
          post={post}
          onPhotoRemoved={props.onPhotoRemoved}
        />
      ))}
    </div>
  );
}

export default PhotoWall;
