import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ImageForm from './ImageForm';

function RoutesList({ images }) {
  return (
    <Routes>
      <Route path='/' element={<Home images={images} />} />
      <Route path='/new' element={<ImageForm />} />
    </Routes>
  );
}

export default RoutesList;