const initialState = {
  inputValue: "",
};

const searchValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
};

export default searchValuesReducer;
