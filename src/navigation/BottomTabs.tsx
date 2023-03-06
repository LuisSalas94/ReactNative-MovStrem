import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from '../screens/Favorites';
import Movies from '../screens/Movies';
import Pricing from '../screens/Pricing';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Pricing" component={Pricing} />
    </Tab.Navigator>
  );
};
