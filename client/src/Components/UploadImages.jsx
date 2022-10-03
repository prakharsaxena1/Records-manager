import React from 'react'
import { useState } from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

const UploadImages = () => {
    let [imagesArray, setImagesArray] = useState([]);
    const onImgChange = (event) => {
        setImagesArray([...imagesArray, ...event.target.files])
    }
    const onUpload = (event) => {
        event.preventDefault()
        let formData = new FormData();
        for (const key of Object.keys(imagesArray)) {
            formData.append('imagesArray', imagesArray[key])
        }
        axios.post("http://localhost:4000/img/multi-images-upload", formData, {
        }).then(response => {
            console.log((response.data))
        })
    }

    return (
        <Form onSubmit={onUpload}>
            <Form.Group>
                <Form.Control className="mb-3" type="file" multiple name="imagesArray" onChange={onImgChange} />
            </Form.Group>
            <Form.Group>
                <Button variant="danger" type="submit">Upload images</Button>
            </Form.Group>
        </Form>
    )
}

export default UploadImages