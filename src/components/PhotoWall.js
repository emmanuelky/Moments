import React from 'react';
import Photo from './Photo';

function PhotoWall(props) {
  console.log(props)
  
  return (
    <div className="App">
    {props.posts.map(post => <Photo key={post.id} post={post} onPhotoRemoved={props.onPhotoRemoved} /> )}
    </div>
  );
}

export default PhotoWall;
