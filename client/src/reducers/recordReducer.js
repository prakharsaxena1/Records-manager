const initialState = [];
const recordReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_RECORD":
            return [...state, action.payload];
        case "UPDATE_RECORD":
            let temp = [];
            for (let record of state) {
                if (record._id === action.payload.id){
                    record = {
                        ...record, 
                        name: action.payload.update.bikeName, 
                        price: action.payload.update.bikePrice 
                    }
                }
                temp.push(record);
            }
            return temp;
        case "DELETE_RECORD":
            return state.filter(record => record._id !== action.payload);
        case "ADD_ALL_RECORD":
            state = action.payload;
            return state;
        default:
            return state;
    }
}


export default recordReducer;