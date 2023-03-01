import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import imageReducer from './image.slice';
import placeReducer from './place.slice';

export const store = configureStore({
  reducer: {
    image: imageReducer,
    place: placeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
