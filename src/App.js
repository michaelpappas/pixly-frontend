import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PixlyApi from './helpers/api';

// for now
import RoutesList from './RoutesList';

/** App: renders Navbar and RoutesList
 *
 * state:
 * - images - contains data - array of image objects
 *                     isLoading boolean
 *
 * props: none
 */
function App() {

  const [images, setImages] = useState({
    data: null,
    isLoading: true
  });

  useEffect(function getImagesOnLoad() {
    getAndSetImages();
  }, []);

  async function getAndSetImages() {
    const images = await PixlyApi.getImages();
    setImages({ data: images, isLoading: false });
  }

  if (images.isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesList images={images.data} />
      </BrowserRouter>
    </div>
  );
}

export default App;
