import * as React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Button, StyleSheet, ImageBackground, Image} from 'react-native';
import * as Linking from 'expo-linking';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Card = (props) => {
    const link = () => {
        Linking.openURL(props.item.link)
    }

    return (
        <View style={{flex:1}}>
            <View style={{ borderRadius: 10, overflow: 'hidden', width: SCREEN_WIDTH / 2.1, }}>
                <TouchableOpacity onPress={link}>
                <ImageBackground style={styles.Img} source={{ uri: props.item.img_link }}>
                    <View style={{
                        ...styles.outlierview,
                        borderColor: props.item.outlier === 'low' ? '#FF9133' :
                            props.item.outlier === 'normal' ? '#38CC44' : '#FF4B4B'
                    }}>
                        <Text style={{fontSize:13,
                            color: props.item.outlier === 'low' ? '#FF9133' :
                            props.item.outlier === 'normal' ? '#38CC44' : '#FF4B4B'
                        }}>
                            {props.item.outlier === 'normal' ? "평균가에요!" :
                                props.item.outlier === 'high' ? "시세 이상" : "시세 이하"
                            }
                        </Text>
                    </View>
                </ImageBackground>
                </TouchableOpacity>
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
        marginTop:8,
        marginLeft:6,
        width:80,
        height:25,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        backgroundColor:'#FFFFFF',
        opacity:0.87,
        borderWidth: 2,
    }
});
