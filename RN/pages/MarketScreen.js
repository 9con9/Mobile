import * as React from 'react';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, TextInput, ScrollView, Alert, Platform, SafeAreaView} from 'react-native';
import { Searchbar  } from 'react-native-paper';
import { Button } from 'react-native-paper';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Dummy_Data = [
  {
    id: 0,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "번개 장터",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 1,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "high",
    place: "인천광역시 남구 용현1,4동",
    platform: "중고 나라",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 2,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "low",
    place: "인천광역시 남구 용현1,4동",
    platform: "중고 나라",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 3,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "",
    platform: "당근 마켓",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 4,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "당근 마켓",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 5,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "번개 장터",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 6,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "번개 장터",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 7,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "번개 장터",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 8,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "번개 장터",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 9,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "번개 장터",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 9,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "번개 장터",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 9,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "번개 장터",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 9,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "번개 장터",
    price: "550000",
    time: "28분 전"
  },
  {
    id: 9,
    img_link: "https://media.bunjang.co.kr/product/202022776_1_1665573167_w292.jpg",
    index: "3",
    link: "https://bunjang.co.kr/products/202022776?q=%EC%9D%B8%EC%B2%9C%20%EC%95%84%EC%9D%B4%ED%8C%A8%EB%93%9C%20%EC%97%90%EC%96%B44&ref=%EA%B2%80%EC%83%89%EA%B2%B0%EA%B3%BC",
    name: "[애플케어플러스] 아이패드 에어 4세대 와이파이 64gb 판매합니다",
    outlier: "normal",
    place: "인천광역시 남구 용현1,4동",
    platform: "번개 장터",
    price: "550000",
    time: "28분 전"
  },
];

function MarketScreen({ navigation }) {
  const [itemData, setItemData] = React.useState(Dummy_Data);

  const [loading, setLoading] = useState(false);
  const [copyItems, setCopyItems] = useState([]);

  //text인풋
  const [text, setText] = React.useState("");
  const addToDo = () => {
    Alert.alert(text)
  }

  //검색
  // const onSearch = value => { startPy(value) }
  // const startPy = async (keyword) => {
  //     setLoading(true)
  //     try {
  //         await axios('http://54.153.1.214:5000/search', {
  //             method: "get",
  //             params: {
  //                 value: keyword
  //             }
  //         })
  //             .then(res => {
  //                 setItems(res.data);
  //                 setCopyItems(res.data);
  //             })
  //             .catch(function (error) {
  //                 console.log(error);
  //             })
  //     } catch (error) {
  //         console.log(error);
  //     }
  //     setLoading(false);
  // }
  // console.log(copyItems);

  return (
    <View style={styles.container}>
      <View style={{width:'100%', alignItems:'center',justifyContent:'center', marginBottom:10,}}>
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

      <SafeAreaView>
        <ScrollView horizontal={true} style={styles.scrollBox} >
          <Button style={styles.btnStyle} textColor='grey' compact='true' borderColor='grey' mode="outlined" onPress={() => console.log('Pressed')}>
            디지털기기
          </Button>
          <Button style={styles.btnStyle} textColor='grey' compact='true' borderColor='grey' mode="outlined" onPress={() => console.log('Pressed')}>
            가구/인테리어
          </Button>
          <Button style={styles.btnStyle} textColor='grey' compact='true' borderColor='grey' mode="outlined" onPress={() => console.log('Pressed')}>
            유아용품
          </Button>
          <Button style={styles.btnStyle} textColor='grey' compact='true' borderColor='grey' mode="outlined" onPress={() => console.log('Pressed')}>
            스포츠/레저
          </Button>
          <Button style={styles.btnStyle} textColor='grey' compact='true' borderColor='grey' mode="outlined" onPress={() => console.log('Pressed')}>
            의류
          </Button>
          <Button style={styles.btnStyle} textColor='grey' compact='true' borderColor='grey' mode="outlined" onPress={() => console.log('Pressed')}>
            도서/티켓/문구
          </Button>
          <Button style={styles.btnStyle} textColor='grey' compact='true' borderColor='grey' mode="outlined" onPress={() => console.log('Pressed')}>
            악기
          </Button>
          <Button style={styles.btnStyle} textColor='grey' compact='true' borderColor='grey' mode="outlined" onPress={() => console.log('Pressed')}>
            반려동물
          </Button>
          <Button style={styles.btnStyle} textColor='grey' compact='true' borderColor='grey' mode="outlined" onPress={() => console.log('Pressed')}>
            미용
          </Button>
          <Button style={styles.btnStyle} textColor='grey' compact='true' borderColor='grey' mode="outlined" onPress={() => console.log('Pressed')}>
            콘솔게임
          </Button>
        </ScrollView>
      </SafeAreaView>

      <View style={{width:'100%', height:8, backgroundColor:'#F2F2F2'}}/> 
      
      <View style={{marginLeft:6, marginTop:5,}}>
        <Text style={{fontSize:17}}>총 {itemData.length}개</Text>
      </View>

      <View style={{paddingVertical: 15, marginLeft:6, marginBottom:150,}}>
        <FlatList
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 32,
          }}
          data={itemData}
          renderItem={({ item }) => <Card item={item} />}
          keyExtractor={(item, index) => index}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default MarketScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollBox:{
    flexDirection:'row',
    backgroundColor:'#F2F2F2',
    borderTopWidth:8,
    borderColor:'#F2F2F2',
  },
  scrollItems:{
    fontSize:42,
  },
  searchbar: {
    width: SCREEN_WIDTH-20,
    backgroundColor : 'white',
    marginTop:8,
  },
  btnStyle:{
    marginLeft:7, 
    backgroundColor:'white'
  }
});



