import apiAxios, { checkForUnauthorizedResponse } from "../../utils/axios";

const textExtractUploadThunk = async (url, params, thunkAPI) => {
    const formData = new FormData();
    formData.append('image', params.image);

    try {
        const response = await apiAxios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
}

const getAllTextExtractsThunk = async (url, _, thunkAPI) => {
    try {
        const response = await apiAxios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        return checkForUnauthorizedResponse(error, thunkAPI);
    }
}

export {
    textExtractUploadThunk,
    getAllTextExtractsThunk
}