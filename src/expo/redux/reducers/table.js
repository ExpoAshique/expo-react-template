import { TABLE_DATA_LIST } from "../constants";

let initialState = {}

const TableReducer = (state = initialState, action) => {
  switch (action.type) {
    case TABLE_DATA_LIST: {
      return (state = {
        ...state,
        ...action.payload,
      })
    }

    default:
      return state
  }
}


export default TableReducer;