import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "Learning Redux Toolkit",
        content: "I've learning Redux Toolkit!"
    },
    {
        id: 2,
        title: "Slices...",
        content: "The more slices I've created!"
    }
];

const postSlice = createSlice({
    name: "posts",
        initialState,
        reducers: {
            postAdded: (state, action) => {
                state.push(action.payload);
            },
            postRemoved: (state, action) => {
                state.splice(action.payload, 1);
            }
        }
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, postRemoved } = postSlice.actions;
export default postSlice.reducer;