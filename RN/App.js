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
              return <AntDesign name={iconName} size={size} color={color} />

            } else if (route.name === 'Chart') {
              iconName = "line-chart"
              return <Fontisto name={iconName} size={size} color={color} />;

            } else if (route.name === 'Market') {
              iconName = "shopping-bag-1"
              return <Fontisto name={iconName} size={size} color={color} />;

            } else if (route.name === 'Issue') {
              return <FontAwesome name="newspaper-o" size={24} color="black" />

            } else {
              return <Ionicons name="person" size={size} color={color} />;
            }
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen
          name="Home" component={HomeScreen}
          options={{ headerShown:false }}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate('Home');
            },
          })}
        />

        <Tab.Screen name="Chart" component={ChartScreen}
        options={{ title: '차트' }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Chart");
          },
        })} />

        <Tab.Screen name="Market" component={MarketScreen}
        options={{ title: '카테고리' }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Market");
          },
        })} />

        <Tab.Screen name="Issue" component={IssueScreen}
        options={{ title: '이슈' }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("Issue");
          },
        })} />

        <Tab.Screen name="MyPage" component={MyPageScreen}
        options={{ title: 'MY' }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("MyPage");
          },
        })} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}