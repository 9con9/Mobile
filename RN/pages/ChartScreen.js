import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator, TouchableOpacity, Alert, Modal, Pressable, StatusBar, ImageBackground } from 'react-native';
import Chart from '../components/Chart';
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

//Axios
import axios from 'axios';
const baseUrl = 'http://23.22.235.3:5000/';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Dummy_Data = 
{
  "all": [
    600000,
    665000,
    705000,
    600000,
    720000,
    690000,
    665000,
    529000
  ],
  "all_not_date": [
    "5\uc77c \uc804",
    "7\uc77c \uc804"
  ],
  "bunjang": [
    600000,
    705000,
    720000,
    705000,
    690000,
    665000,
    550000,
    665000
  ],
  "bunjang_date": [
    "6\uc77c \uc804",
    "4\uc77c \uc804",
    "3\uc77c \uc804",
    "2\uc77c \uc804",
    "\uc624\ub298"
  ],
  "bunjang_not_date": [
    "1\uc77c \uc804",
    "5\uc77c \uc804",
    "7\uc77c \uc804"
  ],
  "dangn": [
    600000,
    600000,
    665000,
    560000,
    705000,
    690000,
    600000,
    720000
  ],
  "dangn_date": [
    "1\uc77c \uc804",
    "\uc624\ub298"
  ],
  "dangn_not_date": [
    "2\uc77c \uc804",
    "3\uc77c \uc804",
    "4\uc77c \uc804",
    "5\uc77c \uc804",
    "6\uc77c \uc804",
    "7\uc77c \uc804"
  ],
  "date": [
    "6\uc77c \uc804",
    "4\uc77c \uc804",
    "3\uc77c \uc804",
    "2\uc77c \uc804",
    "1\uc77c \uc804",
    "\uc624\ub298"
  ],
  "joongna": [
    600000,
    665000,
    665000,
    529000,
    705000,
    690000,
    600000,
    720000
  ],
  "joongna_date": [
    "1\uc77c \uc804",
    "\uc624\ub298"
  ],
  "joongna_not_date": [
    "2\uc77c \uc804",
    "3\uc77c \uc804",
    "4\uc77c \uc804",
    "5\uc77c \uc804",
    "6\uc77c \uc804",
    "7\uc77c \uc804"
  ]
}

function ChartScreen({ navigation }) {
  const [text, setText] = React.useState("");
  const [avg, setAvg] = React.useState(0);

  //modal
  const [modalVisible, setModalVisible] = useState(false);

  //?????? ?????????
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(Dummy_Data);
  const [chartName, setChartName] = useState("");
  const [chartAvg, setChartAvg] = useState("");

  const startPy = async (keyword) => {
    setLoading(true)
    try {
      await axios({
        method: "get",
        url: `${baseUrl}/chart`,
        params: {
            value: keyword
        },
      })
        .then(res => {
          setChartData(res.data)
          setChartAvg(getAvg(res.data.all))
          })
          .catch(function(error){
          console.log(error.response.data);
          Alert.alert("??? 400 error")
        })
    } catch (error) {
      console.log(error.response.data);
    }
    setLoading(false);
    setChartName(keyword);
  }

  //?????? ????????? ??????
  const getAvg = (arr) => {
    let avg = arr.reduce((a, b) => a + b) / arr.length;
    avg = Math.round(parseFloat(avg) / 100) * 100; //?????????
    avg = avg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //?????? ?????????
    return avg
  }

  //?????? ?????? ?????????
  const onSearch = () => {
    console.log("????????? :"+text)
    if (loading) {
      Alert.alert("??? ?????? ????????? ???????????? ?????????.")
      return
    }
    if (text == ""){
      Alert.alert("??? ???????????? ???????????????.")
      return
    }
    startPy(text)
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" barStyle='light-content' />

      <View style={{ overflow: 'hidden', width: '100%', height: '35%' }}>
        <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/chart.jpg')}>
          <View style={styles.innerview}>
            <Text style={styles.maintext}>??????</Text>
            <Text style={styles.subtext}>?????? ????????? ?????? 1?????? ????????? ??? ??? ?????? ????????? ???????????????.</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{ marginTop: 20, flexDirection:'row',  alignItems:'center', justifyContent:'space-around', marginBottom: 5, }}>
        <Pressable>
          <AntDesign style={{marginLeft:8}} name="questioncircleo" size={25} color="#0088CC" onPress={() => setModalVisible(true)} />
        </Pressable>

        <TouchableOpacity>
          <Searchbar
            mode='outlined'
            placeholder="???) ?????? ???????????? ??????3"
            inputStyle={{ fontSize: 15, color: 'grey' }}
            value={text}
            onChangeText={text => setText(text)}
            style={styles.searchbar}
            outlineColor='green'
            activeOutlineColor='green'
            onSubmitEditing={onSearch}
          />
        </TouchableOpacity>
      </View>

      {loading ?
        <View style={{ width: '100%', alignItems: 'center', height: 60 }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={{ color: '#148CFF' }}>?????????? ???????????? ???????????? ?????????.</Text>
        </View>
        :
        chartName ?
          <View style={{ width: '100%', height: 33, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#148CFF' }}>{chartName}??? ?????? 7??? ????????? {chartAvg}??? ?????????.</Text>
          </View>
        :
          <View style={{height: 18 }} />
      }

      <Chart items={chartData}/>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text >
              ?????? ????????? ?????? 1?????? ????????? 
            </Text>
            <Text style={styles.modalText}>
              ??? ??? ?????? ???????????????.
            </Text>

            <Text style={styles.modalText}>
              ????????? ????????? ???????????? ????????? ?????? ????????????.
            </Text>

            <Text style={styles.modalText}>
              ???????????? ??? 20~40?????? ????????? ???????????????.
            </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>???????????????.</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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

  //??????
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop:5,
  },
});
