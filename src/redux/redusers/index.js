import {combineReducers} from "redux";
import themeReduser from "./themeReduser";
import calculatorReduser from "./calculatorReduser";

const rootReducer = combineReducers({
    theme: themeReduser,
    calculator: calculatorReduser,
})

export default rootReducer;