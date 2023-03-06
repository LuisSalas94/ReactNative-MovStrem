import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/storeHooks';
import {fetchAsyncMovies} from '../features/movies/moviesSlice';
import HomeScreen from '../components/HomeScreen';

const Movies = () => {
  const dispatch = useAppDispatch();
  const {movies, isLoading} = useAppSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [dispatch]);

  return (
    <View>
      <HomeScreen />
      <Text>Movies</Text>
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({});
