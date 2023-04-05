import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/BottomTabs';
import {useAppDispatch, useAppSelector} from '../hooks/storeHooks';
import {fetchAsyncMovieOrShowDetails} from '../features/movieDetails/movieDetailsSlice';
import Icon from 'react-native-vector-icons/Ionicons';

//* Redux Actions
import MovieContent from './MovieContent';
import MovieContentButtons from './MovieContentButtons';
import Loader from './Loader';

//* Get the height of the screen
const screenHeight = Dimensions.get('screen').height;

//* Use RootStackParamList
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  if (!movie) {
    return <Text style={styles.movie}>You have not selected a movie yet!</Text>;
  }

  const imdbID = movie.imdbID;
  const dispatch = useAppDispatch();
  const {movieDetails, isLoading} = useAppSelector(state => state.movieDetails);

  const {
    Poster,
    imdbRating,
    Title,
    Released,
    Director,
    Plot,
    Runtime,
    Genre,
    BoxOffice,
  } = movieDetails;
  const uri = Poster;

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));
  }, [dispatch, imdbID]);

  if (isLoading) {
    return (
      <View style={styles.isLoadingContainer}>
        <Loader />
      </View>
    );
  }

  return (
    <ScrollView>
      {/* Image */}
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri}} style={styles.posterImage} />
        </View>
        {/* Genre */}
        <View style={styles.genreContainer}>
          <Text style={styles.genreText}>{Genre}</Text>
        </View>
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={35} color="#fff" />
        </TouchableOpacity>
      </View>
      {/* Rating */}
      <MovieContentButtons
        imdbRating={imdbRating}
        imdbID={imdbID}
        Title={Title}
        movie={movieDetails}
      />
      {/* Content */}
      <MovieContent
        Title={Title}
        Released={Released}
        Runtime={Runtime}
        Director={Director}
        BoxOffice={BoxOffice}
        Plot={Plot}
      />
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  genreContainer: {
    position: 'absolute',
    bottom: 10,
    right: 30,
  },
  genreText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'italic',
    borderWidth: 0.5,
    borderColor: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 5,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    borderWidth: 0.5,
    borderRadius: 50,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderColor: 'transparent',
  },
  isLoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movie: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
  },
});
