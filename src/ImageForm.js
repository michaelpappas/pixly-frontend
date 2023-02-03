import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap-icons';

const INITIAL_FORM_DATA = {
  imgFile: null,
  title: "",
  caption: "",
  photographer: "",
  filter: '',
  resize: 100
};

/** Form for uploading a new image
 *
 * Prop:
 * - upload: Function to call in App to get most up-to-date images
 *
 * State:
 * - formData: Object corresponding to data in the form
 * - isFileChosen: Boolean corresponding to whether a file has been selected
 *
 * RoutesList -> ImageForm
 */

function ImageForm({ upload }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  /** Update formData state with selected file */
  function handleFileChange(evt) {
    setFormData(prevFormData => ({
      ...prevFormData, imgFile: evt.target.files[0]
    }));
  }

  /** Update formData state with input text fields */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevFormData => ({
      ...prevFormData, [name]: value
    }));
  }

  /** Handle submission of form */
  async function handleSubmit(evt) {
    evt.preventDefault();

    const imageFormData = new FormData();
    for (let key in formData) {
      imageFormData.append(key, formData[key]);
    }

    upload(imageFormData);

    setFormData(INITIAL_FORM_DATA);
    const fileInput = document.getElementById('fileInput');
    fileInput.value = '';
  }

  return (
    <Container className='ImageForm'>
      <Row className='d-flex justify-content-center mt-4'>
        <Col xs={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='fileInput' className='mb-3'>
              <Form.Label>Choose an image</Form.Label>
              <Form.Control
                name='imgFile'
                type='file'
                accept='.gif,.jpg,.jpeg,.png,.svg'
                onChange={handleFileChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='filterInput' className='mb-3'>
              <Form.Label>Select a Filter</Form.Label>
              <Form.Select
                name='filter'
                value={formData.filter}
                onChange={handleChange}
              >
                <option value=''>None</option>
                <option value='bw'>Black & White</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId='resizeInput' className='mb-3'>
              <Form.Label>Resize Image</Form.Label>
              <Form.Select
                name='resize'
                value={formData.resize}
                onChange={handleChange}
              >
                <option value={100}>100%</option>
                <option value={75}>75%</option>
                <option value={50}>50%</option>
                <option value={25}>25%</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId='titleInput' className='mb-3'>
              <Form.Label>Image Title</Form.Label>
              <Form.Control
                name='title'
                type='text'
                maxLength={50}
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId='captionInput' className='mb-3'>
              <Form.Label>Image Caption</Form.Label>
              <Form.Control
                name='caption'
                type='text'
                maxLength={100}
                value={formData.caption}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='photographerInput' className='mb-3'>
              <Form.Label>Photographer</Form.Label>
              <Form.Control
                name='photographer'
                type='text'
                maxLength={50}
                value={formData.photographer}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant='dark' type='submit'><Image/></Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageForm;