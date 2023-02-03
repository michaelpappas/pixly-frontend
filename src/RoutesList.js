import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ImageDetail from './ImageDetail';
import ImageForm from './ImageForm';

function RoutesList({ images, upload, handleSearch }) {
  return (
    <Routes>
      <Route path='/' element={<Home images={images} handleSearch={handleSearch} />} />
      <Route path='/:id' element={<ImageDetail />} />\
      <Route path='/new' element={<ImageForm upload={upload} />} />
    </Routes>
  );
}

export default RoutesList;