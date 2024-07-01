import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import textExtractSlice from "./text-extract/textExtractSlice";

const rootReducers = combineReducers({
    user: userSlice,
    textExtract: textExtractSlice
});

export { rootReducers };