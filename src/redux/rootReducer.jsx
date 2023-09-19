import { combineReducers } from "redux";

import cartReducer from "./cart/cartReducer";
import searchValues from "./searchValues/searchValuesReducer";

const rootReducer = combineReducers({
    cartState : cartReducer,
    searchState : searchValues
})

export default rootReducer;