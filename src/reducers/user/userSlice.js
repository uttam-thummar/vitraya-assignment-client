import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
    addUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocaStorage
} from "../../utils/localStorage";
import {
    clearStoreThunk,
    loginUserThunk,
    registerUserThunk
} from "./userThunk";

const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage()
}

export const registerUser = createAsyncThunk(
    'user/register-user',
    async (user, thunkAPI) => {
        return registerUserThunk('/auth/register', user, thunkAPI);
    }
);

export const loginUser = createAsyncThunk(
    'user/login-user',
    async (user, thunkAPI) => {
        return loginUserThunk('/auth/login', user, thunkAPI);
    }
);

export const clearStore = createAsyncThunk('user/clear-store', clearStoreThunk);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state, { payload }) => {
            state.user = null;
            removeUserFromLocaStorage();
            if (payload) {
                toast.success(payload);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user);
                toast.success(`Welcome ${user.username}!`);
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })

            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.user = user;
                addUserToLocalStorage(user);
                toast.success(`Welcome back ${user.username}!`);
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })

            .addCase(clearStore.rejected, () => {
                toast.error('There was an error...');
            })
    }
})

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;