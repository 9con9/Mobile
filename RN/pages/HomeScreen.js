import * as React from 'react';
import { Text, View, TouchableOpacity, Butto, StyleSheet, Dimensions, ImageBackground, StatusBar, Alert } from 'react-native';
import { Searchbar  } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  const [text, setText] = React.useState("");
  const addToDo = () => {
    Alert.alert(text)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <StatusBar style="auto" barStyle='light-content'/>
      <View style={{overflow:'hidden', width:'100%', height:'40%'}}>
        <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/main.jpg')}>
          <View style={styles.innerview}>
            <Text style={styles.subtext}>효율적이고 빠른 비교를 위한</Text>
            <Text style={styles.maintext}>클릭 한번으로</Text>
            <Text style={styles.maintext}>중고상품 가격비교</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{marginTop:20}}>
        <TouchableOpacity>
          <Searchbar
            mode='outlined'
            placeholder="지역 상품명으로 검색하세요!"
            inputStyle={{fontSize:15, color:'grey'}}
            value={text}
            onChangeText={text => setText(text)}
            style={styles.searchbar}
            outlineColor='green'
            activeOutlineColor='green'
            onSubmitEditing={addToDo}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

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
    width:'100%',
    height:'100%',
  },
  searchbar: {
    width: SCREEN_WIDTH-20,
    backgroundColor : 'white',
  },
  innerview: {
    flex:0.5, 
    marginTop:'auto', 
    marginBottom:50,
    marginLeft:15,
  },
  subtext: {
    color: 'white',
    fontSize:13,
    marginBottom:5,
  },
  maintext: {
    marginTop:5,
    color: 'white',
    fontSize:31,
    fontWeight:'bold',
  },

});
