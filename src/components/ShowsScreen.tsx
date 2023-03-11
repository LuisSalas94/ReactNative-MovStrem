import {Dimensions, StyleSheet, View, Text} from 'react-native';
import React from 'react';
//* Divider
import Divider from 'react-native-divider';
import {useAppSelector} from '../hooks/storeHooks';
import Carousel from 'react-native-snap-carousel';
import {MoviePoster} from './MoviePoster';
import NotFoundMovie from './NotFoundMovie';

//* Window Dimensions
const {width: windowWidth} = Dimensions.get('window');

const ShowsScreen = () => {
  const showsState = useAppSelector(state => state.movies.shows);

  return (
    <View style={styles.dividerContainer}>
      <Divider borderColor="#333" color="#333">
        Shows
      </Divider>
      <View style={styles.carouselContainer}>
        {showsState === undefined && <NotFoundMovie />}
        <Carousel
          data={showsState}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
        />
      </View>
      <View style={styles.lineDivider} />
    </View>
  );
};

export default ShowsScreen;

const styles = StyleSheet.create({
  dividerContainer: {
    marginTop: 25,
    paddingHorizontal: 15,
  },
  carouselContainer: {
    marginTop: 25,
    height: 440,
  },
  lineDivider: {
    marginTop: 65,
  },
});
