import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
//* Shared Features
import Share from 'react-native-share';
import {MovieDetailResponse} from '../interfaces/movieInterface';
import {useAppDispatch, useAppSelector} from '../hooks/storeHooks';
import {incrementHeartCount} from '../features/movieDetails/movieDetailsSlice';
import {addToFavorites} from '../features/moviesFavorites/moviesFavoritesSlice';
import Toast from 'react-native-toast-message';

interface Props {
  movie: MovieDetailResponse;
  imdbRating: string;
  imdbID: string;
  Title: string;
}

const MovieContentButtons = ({movie, imdbRating, imdbID, Title}: Props) => {
  const heartCounter = useAppSelector(state => state.movieDetails.heartCount);
  const dispatch = useAppDispatch();

  const myCustomShare = async (title: string) => {
    const shareOptions = {
      message: `MOVstream invites you to check out this movie: ${title}`,
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(movie));
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: `${Title} was added to favorites!`,
    });
  };

  return (
    <View style={styles.ratingContainer}>
      <Toast
        ref={ref => {
          Toast.setRef(ref);
        }}
      />
      <View>
        <TouchableOpacity style={styles.ratingButton}>
          <Text style={styles.ratingButtonText}>IMDB {imdbRating}/10</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', gap: 10}}
          onPress={() => dispatch(incrementHeartCount(imdbID))}>
          <Icon name="heart-outline" size={27} color="#f44336" />
          <Text>{heartCounter}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="share-social-outline"
            size={27}
            color="#f44336"
            onPress={() => myCustomShare(Title)}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAddToFavorites}>
          <Icon name="bookmark-outline" size={27} color="#f44336" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MovieContentButtons;

const styles = StyleSheet.create({
  ratingContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  ratingButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 5,
  },
  ratingButtonText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
  },
});
