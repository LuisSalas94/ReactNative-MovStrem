import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MovieDetailResponse} from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppDispatch} from '../hooks/storeHooks';
import {removeFromFavorites} from '../features/moviesFavorites/moviesFavoritesSlice';
import {useNavigation} from '@react-navigation/native';

interface RenderItemProps {
  item: MovieDetailResponse;
}

export const RenderItem = ({item}: RenderItemProps) => {
  const dispatch = useAppDispatch();
  const uri = item.Poster;
  const navigation = useNavigation();

  return (
    <View style={styles.favoriteItem}>
      <View>
        <Image source={{uri}} style={styles.favoriteItemImage} />
      </View>

      <View style={styles.favoriteItemContent}>
        <Text style={styles.favoriteItemTitle}>{item.Title}</Text>
        <Text>{item.Genre}</Text>
        <Text>{item.Runtime}</Text>
        <Text>Rating: {item.imdbRating}</Text>
        <View style={styles.favoriteItemButtonContainer}>
          <TouchableOpacity
            style={styles.favoriteItemButton}
            onPress={() => dispatch(removeFromFavorites(item.imdbID))}>
            <Text style={styles.favoriteItemButtonText}>Remove</Text>
            <Icon name="trash-outline" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.favoriteItemButton}
            onPress={() => navigation.navigate('DetailScreen', item)}>
            <Text style={styles.favoriteItemButtonText}>Go Back</Text>
            <Icon name="chevron-back-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 145,
    width: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    marginBottom: 40,
  },
  favoriteItemTitle: {
    fontSize: 17,
    marginBottom: 2,
  },
  favoriteItemImage: {
    width: 100,
    height: 120,
    borderRadius: 5,
  },
  favoriteItemContent: {
    marginLeft: 20,
  },
  favoriteItemButtonContainer: {
    flexDirection: 'row',
    gap: 40,
    marginTop: 10,
  },
  favoriteItemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderWidth: 0.5,
    padding: 4,
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: '#f44336',
  },
  favoriteItemButtonText: {
    color: '#fff',
  },
});
