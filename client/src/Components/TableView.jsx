import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { deleteRecordAction } from "./../actions";
import { deleteRecord } from './../Services/record.service';

const TableView = ({records, updateRecordDetails}) => {
    const dispatch = useDispatch();
    return (
        <Table bordered hover className="mt-3">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Bike name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {records.map((record, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{record.name}</td>
                        <td>{record.price}</td>
                        <td>
                            <Button 
                                variant='danger' 
                                className="mx-3" 
                                onClick={(e) => {
                                    dispatch(deleteRecordAction(record._id));
                                    deleteRecord(record._id);
                                }}>Delete</Button>
                            <Button 
                                variant='warning'
                                onClick={() => {
                                    updateRecordDetails(record);
                                }}>Edit</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default TableView