import {createSlice} from '@reduxjs/toolkit';
import {Movie} from '../../interfaces/movieInterface';

//* Initial state
const initialState = {
  movies: {} as Movie,
};

//* Movie Slice
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

//* Export actions

//* Export reducer
export default movieSlice.reducer;
