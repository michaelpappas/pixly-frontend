import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const INITIAL_FORM_DATA = {
  searchTerm: "",
  isFilteringWidth: false,
  minWidth: '',
  maxWidth: ''
};


/** Form for searching by image title or filtering by image properties
 *
 * Prop:
 * - handleSearch
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
    console.log(formData);
    handleSearch(formData);
  }

  /** Update formData state with input text fields */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevFormData => ({
      ...prevFormData, [name]: value
    }));
  }

  /** Update formData state with checkbox text fields */
  function handleCheckboxChange(evt) {
    const { name, checked } = evt.target;
    setFormData(prevFormData => ({
      ...prevFormData, [name]: checked
    }))
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

      <InputGroup className="mb-3">
        <InputGroup.Checkbox
          name='isFilteringWidth'
          checked={formData.isFilteringWidth}
          onChange={handleCheckboxChange}
        />
        <InputGroup.Text>Filter Width</InputGroup.Text>
        <Form.Control
          type='number'
          placeholder='Minimum (px)'
          name='minWidth'
          value={formData.minWidth}
          disabled={!formData.isFilteringWidth}
          onChange={handleChange}
        />
        <Form.Control
          type='number'
          placeholder='Maximum (px)'
          name='maxWidth'
          value={formData.maxWidth}
          disabled={!formData.isFilteringWidth}
          onChange={handleChange}
        />
      </InputGroup>

      <Button variant='primary' type='submit'>Submit</Button>
    </Form>
  );
}


export default FiltersForm;;