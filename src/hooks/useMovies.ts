import {useAppDispatch} from './storeHooks';

export const useMovies = () => {
  const dispatch = useAppDispatch();
  const movies = ['star Wars', 'batman', 'avengers', 'lord of the rings'];
  const shows = ['Stranger Things', 'friends', 'the walking dead'];
  const randomMovie = Math.floor(Math.random() * movies.length);
  const randomShow = Math.floor(Math.random() * shows.length);

  return {
    dispatch,
    movies,
    shows,
    randomMovie,
    randomShow,
  };
};
