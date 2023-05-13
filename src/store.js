import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counters/counterSlice";
import formSlice from "./features/form/formSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        form: formSlice
    }
});