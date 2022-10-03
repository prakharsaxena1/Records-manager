import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { getAllRecords } from './Services/record.service';
import { useDispatch, useSelector } from "react-redux";
import { addRecordsAction } from "./actions";
// Components
import NavbarComponent from './Components/NavbarComponent';
import AddRecordForm from './Components/AddRecordForm';
import TableView from './Components/TableView';
import EditModal from './Components/EditModal';
import UploadImages from './Components/UploadImages';

const App = () => {
  const records = useSelector((state) => state.recordReducer);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  
  const handleClose = () => setShow(false);
  const updateRecordDetails = (data) => {
    setShow(true);
    setData(data);
  }

  useEffect(() => {
    const fetchRecords = async () => {
      const res = await getAllRecords();
      dispatch(addRecordsAction(res.records));
    };
    fetchRecords();
  }, [dispatch]);

  return (
    <React.Fragment>
      <NavbarComponent recordName="Bikes record manager" />
      <Container className="p-3">
        <AddRecordForm />
        <TableView records={records} updateRecordDetails={updateRecordDetails} />
        <EditModal show={show} data={data} handleClose={handleClose} />
        <UploadImages />
      </Container>
    </React.Fragment>
  )
}

export default App