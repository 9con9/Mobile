import * as React from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function MyPageScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{width:'100%', justifyContent:'center', alignItems:'center'}}>
                <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "contain" }} source={require('../assets/img/resellviewer.png')}/>
            </View>
            <Text style={{ color: 'grey', marginTop: 50, fontSize: 18 }}>
                로그인 관련 서비스를 준비 중입니다.
                <MaterialIcons name="miscellaneous-services" size={20} color="grey" />
            </Text>
        </View>
    );
}

export default MyPageScreen;

const styles = StyleSheet.create({
    Img: {
        width: 200,
        height: 77,
    },
})