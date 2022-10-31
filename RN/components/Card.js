import * as React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Button, StyleSheet, ImageBackground, Image} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Card = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={{ borderRadius: 10, overflow: 'hidden', width: SCREEN_WIDTH / 2.1, }}>
                <ImageBackground style={styles.Img} source={{ uri: props.item.img_link }}>
                    <View style={{
                        ...styles.outlierview,
                        backgroundColor: props.item.outlier === 'low' ? '#e0f2ea' :
                            props.item.outlier === 'normal' ? '#eaeaea' : 'red'
                    }}>
                        <Text style={{}}>
                            {props.item.outlier === 'normal' ? "평균가" :
                                props.item.outlier === 'high' ? "시세 이상" : "시세 이하"
                            }
                        </Text>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.textView}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.priceText}>{props.item.price}원</Text>
                    <View style={styles.logoimg}>
                        {
                            props.item.platform === '당근 마켓' &&
                            <Image
                                style={{ width: 15, height: 22 }}
                                imageStyle={{ resizeMode: "cover" }}
                                source={require('../assets/img/temp.png')}
                            />
                        }
                        {
                            props.item.platform === '번개 장터' &&
                            <Image
                                style={{ width: 19, height: 22 }}
                                imageStyle={{ resizeMode: "cover" }}
                                source={require('../assets/img/bunjang.png')}
                            />
                        }
                        {
                            props.item.platform === '중고 나라' &&
                            <Image
                                style={{ width: 20, height: 20 }}
                                imageStyle={{ resizeMode: "cover" }}
                                source={require('../assets/img/junggo.png')}
                            />
                        }
                    </View>
                </View>

                <Text numberOfLines={1}>{props.item.name}</Text>
                <Text style={{color:'gray'}}>{props.item.place}</Text>
                <Text style={{color:'gray'}}>{props.item.time}</Text>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    Img: {
        width: SCREEN_WIDTH / 2.1,
        height: 170,
    },
    textView:{
        width : SCREEN_WIDTH / 2.1,
    },
    priceText:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:7,
        marginBottom:3,
    },
    logoimg:{
        backgroundColor:'white',
        width:'13%',
        height:'13%',
        borderRadius:6,
        marginLeft:5,
        marginTop:7,
    },
    outlierview:{
        marginTop:5,
        width:70,
        height:25,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
    }
});
