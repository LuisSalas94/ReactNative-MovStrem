import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import movieAPI from '../../api/movieAPI';
import {Movie} from '../../interfaces/movieInterface';

//* Movies Interface
export type Movies = {
  movies: Movie[];
  isLoading: boolean;
};

//* Initial state
const initialState: Movies = {
  movies: [],
  isLoading: false,
};

//* Movies Thunk Function
export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const response = await movieAPI.get('?apiKey=c0594a42&s=300&type=movie');
    return response.data;
  },
);

//* Movie Slice
const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAsyncMovies.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.Search;
    });
    builder.addCase(fetchAsyncMovies.rejected, state => {
      state.isLoading = false;
    });
  },
});

//* Export actions

//* Export reducer
export default movieSlice.reducer;
