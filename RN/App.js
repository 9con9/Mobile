import * as React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

//pages
import HomeScreen from './pages/HomeScreen';
import ChartScreen from './pages/ChartScreen';
import MarketScreen from './pages/MarketScreen';
import IssueScreen from './pages/IssueScreen';
import MyPageScreen from './pages/MyPageScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = "home"
              return <AntDesign name={iconName} size={size} color={color}/>
            } else if (route.name === 'Chart') {
              iconName = "line-chart"
            } else if (route.name === 'Market'){
              iconName = "shopping-bag-1"
            } else if (route.name === 'Issue') {
              return <FontAwesome name="newspaper-o" size={24} color="black" />
            } else {
              return <Ionicons name="person" size={size} color={color}/>;
            }
            return <Fontisto name={iconName} size={size} color={color} />;
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chart" component={ChartScreen} />
        <Tab.Screen name="Market" component={MarketScreen} />
        <Tab.Screen name="Issue" component={IssueScreen} />
        <Tab.Screen name="MyPage" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}