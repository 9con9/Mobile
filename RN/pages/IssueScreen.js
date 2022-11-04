import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, StatusBar, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');

function IssueScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="auto" barStyle='light-content' />
            <View style={{ overflow: 'hidden', width: '100%', height: '40%' }}>
                <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/issue.jpg')}>
                    <View style={styles.innerview}>
                        <Text style={styles.maintext}>이슈</Text>
                        <Text style={styles.subtext}>구글 바로가기.</Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={{marginLeft:6 , width:'100%', height:'15%', justifyContent:'center'}}>
                <Text style={{fontSize:15, color:'dimgray'}}>사기 조회하고 거래하세요!</Text>
                <Text style={{fontSize:25, marginTop:4, fontWeight:'bold'}}>중고거래 사기 뉴스 .</Text>
            </View>

            <SafeAreaView>
                <ScrollView horizontal={true} style={styles.scrollBox}>

                    <View style={{justifyContent:'space-around',alignItems:'center', flexDirection:'row'}}>
                        <View style={{ overflow: 'hidden', width:180, marginLeft:12}}>
                            <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/naver.jpg')}>
                                <View style={{...styles.innerview, marginRight:33,}}>
                                    <ImageBackground style={{width:105,height:20}} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/naver_logo.png')}/>
                                    <Text style={{fontWeight:'bold', fontSize:17 ,marginTop:90}}>네이버 바로가기</Text>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ overflow: 'hidden', width: 180, marginLeft: 12 }}>
                            <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/google.jpg')}>
                                <View style={{ ...styles.innerview, marginRight: 33, }}>
                                    <ImageBackground style={{ width: 90, height: 30 }} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/google_logo.png')} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 80 }}>구글 바로가기</Text>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={{ overflow: 'hidden', width: 180, marginLeft: 12, marginRight: 8 }}>
                            <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/daum.jpg')}>
                                <View style={{ ...styles.innerview, marginRight: 33, }}>
                                    <ImageBackground style={{ width: 80, height: 30 }} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/daum_logo.png')} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 90 }}>다음 바로가기</Text>
                                </View>
                            </ImageBackground>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>

        </View>
    );
}

export default IssueScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    cardBox: {
        flex: 1,
        flexDirection: 'row',
    },
    Img: {
        width: '100%',
        height: '100%',
    },
    searchbar: {
        width: SCREEN_WIDTH - 55,
        backgroundColor: 'white',
    },
    innerview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtext: {
        color: 'white',
        marginTop: 7,
        fontSize: 13,
    },
    maintext: {
        marginTop: 5,
        color: 'white',
        fontSize: 31,
        fontWeight: 'bold',
    },
    scrollBox:{
        flexDirection:'row',
        backgroundColor:'#F2F2F2',
        height:'28%', 
    },
})