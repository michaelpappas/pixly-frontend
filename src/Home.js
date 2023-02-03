import React from 'react';
import ImageContainer from "./ImageContainer";
import FiltersForm from './FiltersForm';

/**Home
 * state: none
 * props: images - array of image objects
 *
 * RoutList -> Home
 */
function Home({ images, handleSearch }) {
  return (
    <>
      <FiltersForm handleSearch={handleSearch} />
      <ImageContainer images={images} />
    </>
  );
}

export default Home;