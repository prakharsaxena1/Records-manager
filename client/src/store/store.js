import { configureStore } from '@reduxjs/toolkit';
import recordReducer from '../reducers/recordReducer';

// dummy reducer will be replaced when the real reducers are created
const store = configureStore({
  reducer: { 
    recordReducer
   },
});

export default store;