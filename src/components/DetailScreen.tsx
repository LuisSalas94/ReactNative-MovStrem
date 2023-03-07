import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/BottomTabs';
import {useAppDispatch, useAppSelector} from '../hooks/storeHooks';
import {fetchAsyncMovieOrShowDetails} from '../features/movieDetails/movieDetailsSlice';

//* Use RootStackParamList
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const {imdbID} = movie;
  const dispatch = useAppDispatch();
  const movieDetails = useAppSelector(state => state.movieDetails);

  const {Title, Director} = movieDetails.movieDetails;

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));
  }, [dispatch, imdbID]);

  return (
    <View>
      <Text>{Title}</Text>
      <Text>{Director}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
