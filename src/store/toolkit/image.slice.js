import Image from '../../models/image';
import { createSlice } from "@reduxjs/toolkit";

const initialState = { images: [] };

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    addImage: (state, action) => {
      const newImage = new Image(
        new Date().toString(),
        action.payload.name,
        action.payload.url
      );
      state.images.push(newImage);
    },
  },
});

export const { addImage  } = imageSlice.actions;

export default imageSlice.reducer;
