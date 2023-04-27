import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'cartoons/fetchData',
    async () => {
        const response = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
        const data = await response.json();
        console.log(data);
        return data;
    }
);

export const cardSlice = createSlice({
    name: 'cartoons',
    initialState: {
        cartoons: [],
        status: null, 
    },
    reducers: {
        toggleLike: (state, action) => {
            const isLiked = state.cartoons.some(cartoon => cartoon.id === action.payload.id);
            if(isLiked){
                state = state.cartoons.filter(cartoon => cartoon.id !== action.payload.id);
            } else {
                state.cartoons.push(action.payload);
            }
        },
        deleteCartoon: (state, action) => {
            state.cartoons = state.cartoons.filter(cartoon => cartoon.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.status = 'resolved';
            state.cartoons = action.payload;
            console.log(state.cartoons)
        })
        .addMatcher(fetchData.rejected, (state) => {
            state.status ='error'
        })
    },
});

export const {toggleLike, deleteCartoon} = cardSlice.actions;
export default cardSlice.reducer;