import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {fetchAsyncMovies} from '../features/movies/moviesSlice';
import {fetchAsyncShows} from '../features/movies/moviesSlice';
import {useAppDispatch} from '../hooks/storeHooks';

const SearchInput = () => {
  const [term, setTerm] = useState('');
  const dispatch = useAppDispatch();

  const fetchMovieOrShow = () => {
    if (term) {
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
      setTerm('');
    } else {
      Alert.alert('Dear user', 'Please enter a movie or show name');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.textBackground}
        placeholder="Search your favorite movie or show"
        autoCorrect={false}
        value={term}
        onChangeText={newTerm => setTerm(newTerm)}
      />
      <TouchableOpacity style={styles.icon} onPress={fetchMovieOrShow}>
        <Icon name="search" size={25} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  textBackground: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: 'relative',
    fontSize: 16,
  },

  icon: {
    position: 'absolute',
    right: 20,
    top: 12,
  },
});
