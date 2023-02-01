import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const BASE_URL = "http://localhost:5002/api/images";

const INITIAL_FORM_DATA = {
  imgFile: null,
  title: "",
  caption: "",
  photographer: ""
};

function App() {
  const [isFileChosen, setIsFileChosen] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  function handleFileChange(evt) {
    setFormData(prevFormData => ({
      ...formData, imgFile: evt.target.files[0]
    }));
    setIsFileChosen(true);
    console.log('File chosen');
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevFormData => ({
      ...formData, [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    const imageFormData = new FormData();
    for (let key in formData) {
      imageFormData.append(key, formData[key]);
    }
    uploadFile(imageFormData);

  }

  async function uploadFile(formData) {
    const response = await axios.post(BASE_URL, formData);
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='fileInput'>
          <Form.Label>Choose an image</Form.Label>
          <Form.Control
            name='imgFile'
            type='file'
            accept='.gif,.jpg,.jpeg,.png,.heic,.svg'
            onChange={handleFileChange}
          />
        </Form.Group>
        <Form.Group controlId='titleInput'>
          <Form.Label>Image Title</Form.Label>
          <Form.Control
            name='title'
            type='text'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='captionInput'>
          <Form.Label>Image Caption</Form.Label>
          <Form.Control
            name='caption'
            type='text'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='photographerInput'>
          <Form.Label>Photographer</Form.Label>
          <Form.Control
            name='photographer'
            type='text'
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
    </div>
  );
}

export default App;
