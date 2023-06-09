import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import MyButton from '../components/input/MyButton';
import { useCallback, useRef, useState } from 'react';
import ItemList from '../components/input/ItemList';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigator/Routes';
import { useRecoilState } from 'recoil';
import { itemState } from '../state';

export default function SelectPerson() {
  const navigation = useNavigation();
  const [items, setItems] = useRecoilState(itemState);

  const [text, setText] = useState('');

  const nextId = useRef(3);

  const create = useCallback(
    (text) => {
      const item = {
        id: nextId.current,
        text: text,
      };
      setItems(items.concat(item));
      nextId.current++;
      setText('');
    },
    [items]
  );

  const onCreate = () => {
    items.length < 6
      ? text.length !== 0
        ? create(text)
        : Alert.alert('주의', '값을 입력해주세요.', [{ text: 'OK' }])
      : Alert.alert('주의', '최대 6명까지 입력 가능합니다.', [{ text: 'OK' }]);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <View
      style={{
        flex: 0.95,
      }}
    >
      <View style={{ marginTop: 65, marginLeft: 25 }}>
        <Header />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View>
          <Text style={styles.headerText}>누가 결제하지?</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.inputText}
            placeholder='결제할 사람을 입력해주세요'
            value={text}
            onChangeText={(text) => setText(text)}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#693894',
              padding: 20,
              borderRadius: 20,
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}
            onPress={() => {
              onCreate(text), onReset(), Keyboard.dismiss();
            }}
          >
            <Text style={styles.button}>add</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>최대 6명까지 입력 가능합니다</Text>
        </View>
        <View
          style={{
            marginBottom: 40,
            height: 390,
            width: 350,
            alignItems: 'center',
          }}
        >
          <ScrollView>
            <View style={{ width: 350, alignItems: 'center' }}>
              <ItemList />
            </View>
          </ScrollView>
        </View>
        <View>
          <MyButton
            title='작성완료'
            onPress={() =>
              items.length < 1
                ? Alert.alert('주의', '값을 입력해주세요.', [{ text: 'OK' }])
                : navigation.navigate(Routes.ROULETTE)
            }
          ></MyButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    alignItems: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#693894',
    marginBottom: 30,
  },
  inputText: {
    backgroundColor: 'white',
    width: 210,
    height: 63,
    borderRadius: 20,
    marginRight: 10,
    fontSize: 16,
    paddingLeft: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    color: '#cdcccc',
    fontSize: 12,
    marginTop: 8,
    marginRight: 130,
  },
  button: {
    backgroundColor: '#693894',
    color: '#ffffff',
    borderRadius: 20,
    fontSize: 18,
  },
});
