import * as React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import Chart from '../components/Chart';

function ChartScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Chart></Chart>
    </View>
  );
}

export default ChartScreen;