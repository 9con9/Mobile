import * as React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Chart')}
            />
        </View>
    );
}

export default HomeScreen;
