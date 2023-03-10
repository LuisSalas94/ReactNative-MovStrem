import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import movieAPI from '../../api/movieAPI';
import {Movie} from '../../interfaces/movieInterface';

//* Movies Interface
export type Movies = {
  movies: Movie[];
  shows: Movie[];
  isLoading: boolean;
};

//* Initial state
const initialState: Movies = {
  movies: [],
  shows: [],
  isLoading: false,
};

//* Movies Thunk Function
export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (term: string) => {
    const response = await movieAPI.get(
      `?apiKey=c0594a42&s=${term}&type=movie`,
    );
    return response.data;
  },
);

//* Shows Thunk Function
export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (term: string) => {
    const response = await movieAPI.get(
      `?apiKey=c0594a42&s=${term}&type=series`,
    );
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

    builder.addCase(fetchAsyncShows.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shows = action.payload.Search;
    });
    builder.addCase(fetchAsyncShows.rejected, state => {
      state.isLoading = false;
    });
  },
});

//* Export actions

//* Export reducer
export default movieSlice.reducer;
