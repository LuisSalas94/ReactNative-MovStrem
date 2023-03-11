import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../hooks/storeHooks';
import {MovieDetailResponse} from '../interfaces/movieInterface';
import RenderItem from '../components/RenderItem';
import MovstremIcon from '../components/MovstremIcon';

const Favorites = () => {
  const favoritesMovies = useAppSelector<MovieDetailResponse>(
    state => state.moviesFavorites.moviesFavorites,
  );

  return (
    <View style={styles.favoritesContainer}>
      <ScrollView>
        <View style={{marginVertical: -25}}>
          <MovstremIcon />
        </View>
        <View>
          <Text style={styles.favoritesTitle}>Favorites</Text>
        </View>
        <View>
          <FlatList
            data={favoritesMovies}
            keyExtractor={item => item.imdbID}
            renderItem={({item}) => <RenderItem item={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  favoritesContainer: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
  },

  favoritesTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
});
