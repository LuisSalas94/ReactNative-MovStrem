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
      if (action.payload.imdbID !== movie.imdbID) {
        console.log('Movie already in the array');
      } else {
        state.moviesFavorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      const movie = action.payload;
      //* If movie is in the array, remove it
      state.moviesFavorites = state.moviesFavorites.filter(
        item => item.imdbID !== movie,
      );
    },
  },
});

//* Export actions
export const {addToFavorites, removeFromFavorites} =
  movieFavoritesSlice.actions;

//* Export reducer
export default movieFavoritesSlice.reducer;
