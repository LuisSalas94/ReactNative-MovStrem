import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  Title: string;
  Released: string;
  Director: string;
  Plot: string;
  Runtime: string;
  BoxOffice: string;
}

const MovieContent = ({
  Title,
  Released,
  Director,
  Plot,
  Runtime,
  BoxOffice,
}: Props) => {
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.contentText}>
        <Text style={styles.spanText}>Title:</Text> {Title}
      </Text>
      <View>
        <Text style={styles.contentText}>
          <Text style={styles.spanText}>Released:</Text> {Released} - {Runtime}
        </Text>
      </View>
      <View>
        <Text style={styles.contentText}>
          <Text style={styles.spanText}> Directed by: </Text>
          {Director ? Director : <Text>Not available</Text>}
        </Text>
      </View>
      <View>
        <Text style={styles.contentText}>
          <Text style={styles.spanText}> BoxOffice: </Text>
          {BoxOffice ? BoxOffice : <Text>Not available</Text>}
        </Text>
      </View>
      <View>
        <Text style={{...styles.contentText, marginTop: 10}}>{Plot}</Text>
      </View>
      <View style={{paddingVertical: 30}}></View>
    </View>
  );
};

export default MovieContent;

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 18,
    lineHeight: 35,
  },
  spanText: {
    color: '#f44336',
    fontWeight: '500',
  },
});
