import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { addRecord } from './../Services/record.service';

// Redux + actions
import { useDispatch } from "react-redux";
import { addRecordAction } from "./../actions";


const AddRecordForm = () => {
  const [bikeRecord, setBikeRecord] = useState({ bikeName: "", bikePrice: "" })
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setBikeRecord({
      ...bikeRecord,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Form onSubmit={async (e) => {
      e.preventDefault();
      const res = await addRecord(bikeRecord);
      dispatch(addRecordAction(res.record));
    }}
      className="m-auto w-75"
    >
      <h4 className="text-muted text-center">Add record for bike</h4>
      <Form.Group className="mb-2 d-flex align-items-baseline justify-content-around">
        <Form.Label className="text-center">Name</Form.Label>
        <Form.Control name="bikeName" type="text" placeholder="Enter name" className="w-75" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-2 d-flex align-items-baseline justify-content-around">
        <Form.Label className="text-center">Price</Form.Label>
        <Form.Control name="bikePrice" type="text" placeholder="Enter price" className="w-75" onChange={handleChange} />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Button variant="secondary" type="submit">Submit</Button>
      </div>
    </Form>
  );
}

export default AddRecordForm;