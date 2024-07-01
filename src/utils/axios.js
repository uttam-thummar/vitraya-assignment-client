import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";
import { clearStore } from "../reducers/user/userSlice";

const apiAxios = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL_DEV}/api/v1`
});

apiAxios.interceptors.request.use(
    (config) => {
        const user = getUserFromLocalStorage();
        if (user) {
            config.headers['Authorization'] = `Bearer ${user.token}`;
        }
        return config;
    }
);

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
    if (error.response.status === 401) {
        thunkAPI.dispatch(clearStore());
        return thunkAPI.rejectWithValue('Unauthorized! Logging Out...');
    }
    return thunkAPI.rejectWithValue(error.response.data.message);
}

export default apiAxios;