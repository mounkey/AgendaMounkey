import Place from '../../models/place';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        new Date().toString(),
        action.payload.address,
        action.payload.lat,
        action.payload.lng
      );
      state.places.push(newPlace);
    }
  },
});

export const {addPlace} = placeSlice.actions;

export default placeSlice.reducer;
