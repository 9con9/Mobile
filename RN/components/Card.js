import * as React from 'react';
import { Text, View, Dimensions, TouchableOpacity, Button, StyleSheet, ImageBackground  } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Card = (props) => {
    return (
        <View>
            <View style={{borderRadius:30, overflow:'hidden'}}>
            <ImageBackground style={styles.Img} source={{ uri: props.item.img_link }}>
                <View style={styles.outlierView}>
                    {props.item.outlier === 'high' && <Text style={{color: "red"}}>평균보다 비싸요</Text>}
                    {props.item.outlier === 'normal' && <Text style={{color: "green"}}>평균가에요!</Text>}
                    {props.item.outlier === 'low' && <Text style={{color: "orange"}}>평균보다 싸요</Text>}
                </View>
            </ImageBackground>
            </View>

            <View style={styles.textView}>
                <Text style={styles.priceText}>{props.item.price}</Text>
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
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    Img: {
        width: SCREEN_WIDTH / 2.25,
        height: 200,
    },
    textView:{
        width : SCREEN_WIDTH / 2.25,
    },
    outlierView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:13,
        marginLeft:10,
        
        border:2,
        borderRadius: 50,
        borderColor:'#FF5050',
        borderStyle:'solid',
        borderWidth:2,
        
        width:100,
        height:37,
        
        opacity:0.7,
        backgroundColor:'white',
    },
    priceText:{
        fontSize:16,
    }
});
