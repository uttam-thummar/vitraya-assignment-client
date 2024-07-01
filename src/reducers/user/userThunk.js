import apiAxios from "../../utils/axios";
import { clearTextExtractState } from "../text-extract/textExtractSlice";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const response = await apiAxios.post(url, user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
}

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const response = await apiAxios.post(url, user);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
}

export const clearStoreThunk = async (message, thunkAPI) => {
    try {
        thunkAPI.dispatch(logoutUser(message));
        thunkAPI.dispatch(clearTextExtractState());
        return Promise.resolve();
    } catch (error) {
        return Promise.reject();
    }
}