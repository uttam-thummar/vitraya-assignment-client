import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllTextExtractsThunk, textExtractUploadThunk } from "./textExtractThunk";

const initialState = {
    isLoading: false,
    currentTextExtract: {},
    recentTextExtracts: {
        data: [],
        count: 0
    }
}

export const textExtractUpload = createAsyncThunk(
    'textExtract/upload',
    async (params, thunkAPI) => {
        return textExtractUploadThunk('/image-text', params, thunkAPI);
    }
);

export const getAllTextExtracts = createAsyncThunk(
    'textExtract/get-all',
    async (_, thunkAPI) => {
        return getAllTextExtractsThunk('/image-text', _, thunkAPI);
    }
);

const textExtractSlice = createSlice({
    name: 'textExtract',
    initialState,
    reducers: {
        clearTextExtractState: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(textExtractUpload.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(textExtractUpload.fulfilled, (state, { payload }) => {
                const { imageText } = payload;
                state.isLoading = false;
                state.currentTextExtract = imageText;
            })
            .addCase(textExtractUpload.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })

            .addCase(getAllTextExtracts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTextExtracts.fulfilled, (state, { payload }) => {
                const { count, imageTexts } = payload;
                state.isLoading = false;
                state.recentTextExtracts.data = imageTexts;
                state.recentTextExtracts.count = count;
            })
            .addCase(getAllTextExtracts.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
    }
});

export const { clearTextExtractState } = textExtractSlice.actions;
export default textExtractSlice.reducer