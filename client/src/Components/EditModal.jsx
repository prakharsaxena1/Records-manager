import React, { useRef } from 'react'
import { updateRecord } from './../Services/record.service';
import { Offcanvas, Form, Button } from 'react-bootstrap';
// Redux + actions
import { useDispatch } from "react-redux";
import { updateRecordAction } from "./../actions";


const EditModal = ({ show, handleClose, data }) => {
    const dispatch = useDispatch();
    const bikeName = useRef();
    const bikePrice = useRef();
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Edit record</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={async (e) => {
                    e.preventDefault();
                    let a = bikeName.current.value === "" ? data.name : bikeName.current.value;
                    let b = bikePrice.current.value === "" ? data.price : bikePrice.current.value;
                    let record = { bikeName: a, bikePrice: b };
                    await updateRecord({ id: data._id, update: record });
                    dispatch(updateRecordAction({ id: data._id, update: record }));
                }}
                    className="m-auto"
                >
                    <h4 className="text-muted text-center">Edit record for bike</h4>
                    <Form.Group className="mb-2 d-flex align-items-baseline justify-content-around">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control ref={bikeName} type="text" className="w-75" placeholder={data.name} />
                    </Form.Group>
                    <Form.Group className="mb-2 d-flex align-items-baseline justify-content-around">
                        <Form.Label className="text-center">Price</Form.Label>
                        <Form.Control ref={bikePrice} type="text" className="w-75" placeholder={data.price} />
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary" type="submit" onClick={handleClose}>Update</Button>
                    </div>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default EditModal