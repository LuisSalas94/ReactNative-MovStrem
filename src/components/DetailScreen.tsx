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
//* Shared Features
import Share from 'react-native-share';

//* Get the height of the screen
const screenHeight = Dimensions.get('screen').height;

//* Use RootStackParamList
interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const {imdbID} = movie;
  const dispatch = useAppDispatch();
  const movieDetails = useAppSelector(state => state.movieDetails);

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
  } = movieDetails.movieDetails;
  const uri = Poster;

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));
  }, [dispatch, imdbID]);

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
      <View style={styles.ratingContainer}>
        <View>
          <TouchableOpacity style={styles.ratingButton}>
            <Text style={styles.ratingButtonText}>IMDB {imdbRating}/10</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Icon name="heart-outline" size={27} color="#f44336" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="share-social-outline"
              size={27}
              color="#f44336"
              onPress={() => myCustomShare(Title)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="bookmark-outline" size={27} color="#f44336" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          <Text style={styles.spanText}>Title:</Text> {Title}
        </Text>
        <View>
          <Text style={styles.contentText}>
            <Text style={styles.spanText}>Released:</Text> {Released} -{' '}
            {Runtime}
          </Text>
        </View>
        <View>
          <Text style={styles.contentText}>
            <Text style={styles.spanText}> Directed by: </Text>
            {Director}
          </Text>
        </View>
        <View>
          <Text style={styles.contentText}>
            <Text style={styles.spanText}> BoxOffice: </Text>

            {BoxOffice}
          </Text>
        </View>
        <View>
          <Text style={{...styles.contentText, marginTop: 10}}>{Plot}</Text>
        </View>
      </View>
      <View style={{paddingVertical: 30}}></View>
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
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 18,
    lineHeight: 35,
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
  spanText: {
    color: '#f44336',
    fontWeight: '500',
  },
});
