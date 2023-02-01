import React from 'react';
import ImageContainer from "./ImageContainer";

/**Home
 * state: none
 * props: images - array of image objects
 */
function Home({ images }) {
  return (
    <ImageContainer images={images} />
  );
}

export default Home;