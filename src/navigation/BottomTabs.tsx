import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from '../screens/Favorites';
import Movies from '../screens/Movies';
import Pricing from '../screens/Pricing';
import DetailScreen from '../components/DetailScreen';
import {Movie} from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';

export type RootStackParams = {
  Movies: undefined;
  DetailScreen: Movie;
};

const Tab = createBottomTabNavigator<RootStackParams>();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: 60,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.80)',
        },
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}
      tabBarOptions={{
        activeTintColor: '#5856D6',
        labelStyle: {
          marginBottom: 10,
        },
      }}>
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarLabel: 'Movies',
          tabBarIcon: ({color}) => (
            <Icon name="film-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({color}) => (
            <Icon name="options-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <Icon name="bookmarks-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Pricing"
        component={Pricing}
        options={{
          tabBarLabel: 'Pricing',
          tabBarIcon: ({color}) => (
            <Icon name="card-outline" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
