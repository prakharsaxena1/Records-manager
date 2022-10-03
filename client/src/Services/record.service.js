import axios from 'axios'
import SERVER_URL from './serverUrl';

export const getOneRecord = async (id) => {
  const res = await axios.get(`${SERVER_URL}/record/${id}`);
  return await res.data;
}
export const getAllRecords = async () => {
  const res = await axios.get(`${SERVER_URL}/record`);
  return await res.data;
}
export const addRecord = async (data) => {
  const res = await axios.post(`${SERVER_URL}/record`, data);
  return await res.data;
}
export const updateRecord = async (data) => {
  const res = await axios.put(`${SERVER_URL}/record`, data);
  return await res.data;
}
export const deleteRecord = async (id) => {
  const res = await axios.delete(`${SERVER_URL}/record/${id}`);
  return await res.data;
}
