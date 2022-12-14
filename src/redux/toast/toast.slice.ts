import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateToast = createAsyncThunk(
    'toastSlice/updateToast',
    async (data: Array<NToast.ItemObject>, thunkApi) => {
        try {
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue('Cannot update the user profile!');
        }
    }
);

export const clearToast = createAsyncThunk('toastSlice/clearToast', async (_, thunkApi) => {
    try {
        return undefined;
    } catch (error) {
        return thunkApi.rejectWithValue('Cannot clear toast!');
    }
});

const initialState: {
    loading: boolean;
    success: boolean;
    toasts?: Array<NToast.ItemObject>;
} = {
    loading: false,
    success: false,
    toasts: undefined,
};

const toastSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(updateToast.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateToast.fulfilled, (state, action) => {
            state.loading = false;
            state.toasts = action.payload;
            state.success = true;
        });
        builder.addCase(updateToast.rejected, (state) => {
            state.loading = false;
            state.success = false;
        });

        builder.addCase(clearToast.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(clearToast.fulfilled, (state) => {
            state.loading = false;
            state.toasts = undefined;
            state.success = true;
        });
        builder.addCase(clearToast.rejected, (state) => {
            state.loading = false;
            state.success = false;
        });
    },
});

export default toastSlice.reducer;
