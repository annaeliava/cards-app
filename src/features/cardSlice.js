import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'cartoons/fetchData',
    async () => {
        const response = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
        const data = await response.json();
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
            // const likedItem = state.cartoons.find(
            //     (cartoon) => cartoon.id === action.payload.id
            //   );
            //   if (likedItem) {
            //     likedItem.liked = action.payload.isLiked;
            //   }
            const isLiked = state.cartoons.find(cartoon => cartoon.id === action.payload.id);
            if(isLiked){
                isLiked.liked = action.payload.isLiked;
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