import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../features/movies/moviesSlice';
import HomeScreen from '../components/HomeScreen';
import ShowsScreen from '../components/ShowsScreen';
import {useMovies} from '../hooks/useMovies';

const Movies = () => {
  const {dispatch, movies, shows, randomMovie, randomShow} = useMovies();

  useEffect(() => {
    dispatch(fetchAsyncMovies(movies[randomMovie]));
    dispatch(fetchAsyncShows(shows[randomShow]));
  }, [dispatch, randomMovie]);

  return (
    <ScrollView>
      <HomeScreen />
      <ShowsScreen />
    </ScrollView>
  );
};

export default Movies;
