import * as React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';


function ChartScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chart!</Text>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default ChartScreen;