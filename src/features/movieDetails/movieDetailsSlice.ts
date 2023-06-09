import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import movieAPI from '../../api/movieAPI';
import {MovieDetailResponse} from '../../interfaces/movieInterface';

//* MovieDetails Interface
export type MovieDetails = {
  movieDetails: MovieDetailResponse[];
  heartCount: number;
  isLoading: boolean;
};

//* Initial state
const initialState: MovieDetails = {
  movieDetails: [],
  heartCount: 0,
  isLoading: false,
};

//* MovieDetails Thunk Function
export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  'movieDetails/fetchAsyncMovieOrShowDetails',
  async (id: string) => {
    const response = await movieAPI.get(`?apiKey=c0594a42&i=${id}&plot=full`);
    return response.data;
  },
);

//* MovieDetails Slice
const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    incrementHeartCount: (state, action) => {
      state.heartCount = state.heartCount + 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAsyncMovieOrShowDetails.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchAsyncMovieOrShowDetails.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
      state.isLoading = false;
    });
  },
});

//* Export actions
export const {incrementHeartCount} = movieDetailsSlice.actions;

//* Export reducer
export default movieDetailsSlice.reducer;
