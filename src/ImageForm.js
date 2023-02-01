import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PixlyApi from './helpers/api';

const INITIAL_FORM_DATA = {
  imgFile: null,
  title: "",
  caption: "",
  photographer: ""
};

/** Form for uploading a new image
 *
 * Prop:
 * - some kind of function?
 *
 * State:
 * - formData: Object corresponding to data in the form
 * - isFileChosen: Boolean corresponding to whether a file has been selected
 *
 * RoutesList -> ImageForm
 */

function ImageForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isFileChosen, setIsFileChosen] = useState(false);

  /** Update formData state with selected file */
  function handleFileChange(evt) {
    setFormData(prevFormData => ({
      ...formData, imgFile: evt.target.files[0]
    }));
    setIsFileChosen(true);
    console.log('File chosen');
  }

  /** Update formData state with input text fields */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevFormData => ({
      ...formData, [name]: value
    }));
  }

  /** Handle submission of form */
  function handleSubmit(evt) {
    evt.preventDefault();

    const imageFormData = new FormData();
    for (let key in formData) {
      imageFormData.append(key, formData[key]);
    }
    PixlyApi.uploadImage(imageFormData);
  }

  return (
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
  );
}

export default ImageForm;