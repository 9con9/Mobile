import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert, Modal, Pressable, StatusBar, ImageBackground } from 'react-native';
import Chart from '../components/Chart';
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

//Axios
import axios from 'axios';
const baseUrl = 'http://192.168.2.97:5000';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

function ChartScreen({ navigation }) {
  const [text, setText] = React.useState("");
  const [avg, setAvg] = React.useState(0);

  //modal
  const [modalVisible, setModalVisible] = useState(false);

  //차트 데이터
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState({});

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
        .then(res => setChartData(res.data))
        .catch(function(error){
          console.log(error.response.data);
        })
    } catch (error) {
      console.log(error.response.data);
    }
    setLoading(false);
  }

  const onSearch = text => { startPy(text) }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" barStyle='light-content' />

      <View style={{ overflow: 'hidden', width: '100%', height: '40%' }}>
        <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/chart.jpg')}>
          <View style={styles.innerview}>
            <Text style={styles.maintext}>차트</Text>
            <Text style={styles.subtext}>중고 상품의 최근 1주일 시세를 볼 수 있는 차트를 제공합니다.</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={{ marginTop: 20, flexDirection:'row',  alignItems:'center', justifyContent:'space-around', marginBottom: 20, }}>
        <Pressable>
          <AntDesign style={{marginLeft:8}} name="questioncircleo" size={25} color="#0088CC" onPress={() => setModalVisible(true)} />
        </Pressable>

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
            onSubmitEditing={onSearch}
          />
        </TouchableOpacity>
      </View>

      {loading &&
      <View style={{width:'100%', alignItems:'center', marginTop:15}}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>검색 중입니다.</Text>
      </View>
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
              중고 상품의 최근 1주일 시세를 
            </Text>
            <Text style={styles.modalText}>
              볼 수 있는 차트입니다.
            </Text>

            <Text style={styles.modalText}>
              시세는 가격의 이상치를 제거한 중앙 값입니다.
            </Text>

            <Text style={styles.modalText}>
              검색까지 약 1분의 시간이 소요됩니다.
            </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>확인했어요.</Text>
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

  //모달
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
