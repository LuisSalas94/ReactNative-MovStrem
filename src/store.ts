import {configureStore} from '@reduxjs/toolkit';
import moviesReduces from './features/movies/moviesSlice';
import movieDetailsReducer from './features/movieDetails/movieDetailsSlice';
import movieFavoritesReducer from './features/moviesFavorites/moviesFavoritesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReduces,
    movieDetails: movieDetailsReducer,
    moviesFavorites: movieFavoritesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
