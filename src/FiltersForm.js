import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const INITIAL_FORM_DATA = {
  searchTerm: ""
};


/** Form for searching by image title
 *
 * Prop:
 * - handleSearch:
 *
 * State:
 * - formData: Object corresponding to data in the form
 *
 * RoutesList -> Home -> FiltersForm
 */
function FiltersForm({ handleSearch }) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  /**Fires parent function */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData);
  }

  /** Update formData state with input text fields */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevFormData => ({
      ...formData, [name]: value
    }));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='searchTerm'>
        <Form.Label>Search by title:</Form.Label>
        <Form.Control
          name='searchTerm'
          type='text'
          maxLength={50}
          value={formData.searchTerm}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>Submit</Button>
    </Form>
  );
}


export default FiltersForm;;