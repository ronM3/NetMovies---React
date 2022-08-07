import React from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { apiConfig } from "../Api/apiConfig";
import { useState } from 'react';

const LightBox = ({movies, startIndex}) => {

    const [currentPhotoIndex, setIndex] = useState(startIndex);

  return (
    <Lightbox
    mainSrc={apiConfig.w500Image(movies[currentPhotoIndex].poster_path)}
    nextSrc={apiConfig.w500Image(movies[(currentPhotoIndex + 1) % movies.length].poster_path)}
    prevSrc={apiConfig.w500Image(
        movies[(currentPhotoIndex + movies.length - 1) % movies.length].poster_path
    )}
    onMovePrevRequest={() => setIndex((currentPhotoIndex + movies.length - 1) % movies.length)}
    onMoveNextRequest={() => setIndex((currentPhotoIndex + 1) % movies.length)}
  />
  )
}

export default LightBox