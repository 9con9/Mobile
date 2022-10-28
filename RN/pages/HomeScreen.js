import * as React from 'react';
import { Text, View, TouchableOpacity, Butto, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  const [text, setText] = React.useState("");

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{overflow:'hidden', width:'100%', height:'40%'}}>
        <ImageBackground style={styles.Img} imageStyle={{ resizeMode: "cover" }} source={require('../assets/img/main.jpg')}>
          <View>
            <Text>ㅎㅇ</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{marginTop:20}}>
        <TouchableOpacity>
          <TextInput
            icon = "card-search-outline"  
            label="지역 상품명으로 검색하세요 !"
            value={text}
            onChangeText={text => setText(text)}
            style={styles.searchbar}
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
  },
});
