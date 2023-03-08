import {createSlice} from '@reduxjs/toolkit';
import {MovieDetailResponse} from '../../interfaces/movieInterface';

//* MoviesFavorites Interface
export type MoviesFavorites = {
  moviesFavorites: MovieDetailResponse[];
};

//* Initial state
const initialState: MoviesFavorites = {
  moviesFavorites: [],
};

//* MoviesFavorites Slice
const movieFavoritesSlice = createSlice({
  name: 'moviesFavorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      //state.moviesFavorites.push(action.payload);
      //* If movie is not in the array, add it
      if (!state.moviesFavorites.includes(movie)) {
        state.moviesFavorites.push(action.payload);
      }
    },
  },
});

//* Export actions
export const {addToFavorites} = movieFavoritesSlice.actions;

//* Export reducer
export default movieFavoritesSlice.reducer;
