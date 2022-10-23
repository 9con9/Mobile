import * as React from 'react';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity, TextInput, ScrollView, Alert, Platform } from 'react-native';

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
    platform: "번개 장터",
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
    platform: "번개 장터",
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
    platform: "번개 장터",
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
    platform: "번개 장터",
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
];

function MarketScreen({ navigation }) {
  const [itemData, setItemData] = React.useState(Dummy_Data);

  const [loading, setLoading] = useState(false);
  const [copyItems, setCopyItems] = useState([]);

  //text인풋
  const [text, setText] = useState("");
  const onChangeText = (payload) => setText(payload);

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
      <Text>Market!</Text>
      <TextInput
        returnKeyType='done'
        // onSubmitEditing={addToDo}
        // onChangeText={onChangeText}
        placeholder={"지역 상품명으로 검색하세요."}
        >
      </TextInput>

      <View style={{ paddingVertical: 15 }}>
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
    paddingHorizontal: 20,
  },
  cardBox: {
    flex: 1,
    flexDirection: 'row',
  }
});



