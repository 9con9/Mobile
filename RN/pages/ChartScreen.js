import * as React from 'react';
import { Text, View, TouchableOpacity, Butto, StyleSheet, Dimensions, ImageBackground, StatusBar, Alert } from 'react-native';
import Chart from '../components/Chart';
import { Searchbar  } from 'react-native-paper';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

function ChartScreen({navigation}) {
  const [text, setText] = React.useState("");
  const addToDo = () => {
    Alert.alert(text)
  }

  return (
    <View style={{ flex: 1}}>
      <StatusBar style="auto" barStyle='light-content' />
      
      <View style={{ overflow: 'hidden', width: '100%', height: '40%' }}>
        <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/chart.jpg')}>
          <View style={styles.innerview}>
            <Text style={styles.maintext}>차트</Text>
            <Text style={styles.subtext}>중고 상품의 최근 1주일 시세를 볼 수 있는 차트를 제공합니다.</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{ marginTop: 20, alignItems:'center', marginBottom:15,}}>
        <TouchableOpacity>
          <Searchbar
            mode='outlined'
            placeholder="지역 상품명으로 검색하세요!"
            inputStyle={{ fontSize: 15, color: 'grey' }}
            value={text}
            onChangeText={text => setText(text)}
            style={styles.searchbar}
            outlineColor='green'
            activeOutlineColor='green'
            onSubmitEditing={addToDo}
          />
        </TouchableOpacity>
      </View>

      <Chart/>
    </View>
  );
}

export default ChartScreen;

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
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  subtext: {
    color: 'white',
    marginTop:7,
    fontSize:13,
  },
  maintext: {
    marginTop:5,
    color: 'white',
    fontSize:31,
    fontWeight:'bold',
  },

});
