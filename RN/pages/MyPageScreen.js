import * as React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';

function MyPageScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>MyPage!</Text>
        </View>
    );
}

export default MyPageScreen;