import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, StatusBar, ImageBackground, ScrollView, SafeAreaView } from 'react-native';
const { width: SCREEN_WIDTH } = Dimensions.get('window');
import * as Linking from 'expo-linking';

function IssueScreen({ navigation }) {

    //링크
    const link = (message) => {
        if(message === "naver"){
            Linking.openURL("https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98+%EC%82%AC%EA%B8%B0")
        } else if (message === "google"){
            Linking.openURL("https://news.google.com/search?q=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98%20%EC%82%AC%EA%B8%B0&hl=ko&gl=KR&ceid=KR%3Ako")
        } else if (message === "daum"){
            Linking.openURL("https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98+%EC%82%AC%EA%B8%B0")
        } else if (message === "thecheat"){
            Linking.openURL("https://thecheat.co.kr/rb/?mod=_search")
        }
    }

    return (
        <View style={{ flex: 1 }}>

            <StatusBar style="auto" barStyle='light-content' />
            <View style={{ overflow: 'hidden', width: '100%', height: '35%' }}>
                <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/issue.jpg')}>
                    <View style={styles.innerview}>
                        <Text style={styles.maintext}>이슈</Text>
                        <Text style={styles.subtext}>중고거래 사기 관련 정보를 알려드립니다.</Text>
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
                            <TouchableOpacity onPress={(message) => link("naver")}>
                                <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/naver.jpg')}>
                                    <View style={{...styles.innerview, marginRight:33,}}>
                                        <ImageBackground style={{width:105,height:20}} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/naver_logo.png')}/>
                                        <Text style={{fontWeight:'bold', fontSize:17 ,marginTop:90}}>네이버 바로가기</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <View style={{ overflow: 'hidden', width: 180, marginLeft: 12 }}>
                            <TouchableOpacity onPress={(message) => link("google")}>
                                <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/google.jpg')}>
                                    <View style={{ ...styles.innerview, marginRight: 33, }}>
                                        <ImageBackground style={{ width: 90, height: 30 }} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/google_logo.png')} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 80 }}>구글 바로가기</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                        <View style={{ overflow: 'hidden', width: 180, marginLeft: 12, marginRight: 8 }}>
                            <TouchableOpacity onPress={(message) => link("daum")}>
                                <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/daum.jpg')}>
                                    <View style={{ ...styles.innerview, marginRight: 33, }}>
                                        <ImageBackground style={{ width: 80, height: 30 }} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/daum_logo.png')} />
                                        <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 90 }}>다음 바로가기</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>


            <View style={{ width: '100%', marginTop: 'auto', backgroundColor: '#006CB5' }}>
                <TouchableOpacity onPress={(message) => link('thecheat')}>
                    <ImageBackground style={{ height: 90 }} imageStyle={{ resizeMode: "contain" }} source={require('../assets/img/thecheat.png')} />
                </TouchableOpacity>
            </View>
            
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