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
        action.payload.id.toString(),
        action.payload.address,
        action.payload.lat,
        action.payload.lng
      );
      state.places.push(newPlace);
    },
    setPlace: (state, action) => {
      state.places = action.payload;
    },
  },
});

export const {addPlace} = placeSlice.actions;

export const savePlace = (address, coords) => {
  return async (dispatch) => {
    try{
      const response = await fetch(URL_MAP(coords.lat, coords.lgn));
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const responseJson = await response.json();

      const address = data.result[0].formatted_address;
      const result = await insertPlace(address, coords);
      dispatch(addPlace({id: result.insertId, address: address, coords: coords}));
    }
    catch(err){
      console.log(err);
    }
  };
};

export const loadPlaces = () => {
  return async (dispatch) => {
    try{
      const dbResult = await fetchPlaces();
      dispatch(setPlace(dbResult?.rows?._array));
    }
    catch(err){
      console.log(err);
    }
  };
};



export default placeSlice.reducer;
