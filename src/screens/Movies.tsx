import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch} from '../hooks/storeHooks';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../features/movies/moviesSlice';
import HomeScreen from '../components/HomeScreen';
import ShowsScreen from '../components/ShowsScreen';

const Movies = () => {
  const dispatch = useAppDispatch();

  const movies = ['star Wars', 'batman', 'avengers', 'lord of the rings'];
  const shows = ['Stranger Things', 'friends', 'the walking dead'];
  const randomMovie = Math.floor(Math.random() * movies.length);
  const randomShow = Math.floor(Math.random() * shows.length);

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

const styles = StyleSheet.create({});
