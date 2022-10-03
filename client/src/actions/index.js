export const addRecordAction = (payload) => {
    return {
        type: "ADD_RECORD",
        payload
    }
}
export const addRecordsAction = (payload) => {
    return {
        type: "ADD_ALL_RECORD",
        payload
    }
}
export const updateRecordAction = (payload) => {
    return {
        type: "UPDATE_RECORD",
        payload
    }
}
export const deleteRecordAction = (payload) => {
    return {
        type: "DELETE_RECORD",
        payload
    }
}
