import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ImageForm from './ImageForm';

function RoutesList({ images, upload }) {
  return (
    <Routes>
      <Route path='/' element={<Home images={images} />} />
      <Route path='/new' element={<ImageForm upload={upload}/>} />
    </Routes>
  );
}

export default RoutesList;