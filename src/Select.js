import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import MyButton from '../Components/MyButton';
import Header from '../Components/Header';
import { useCallback, useRef, useState } from 'react';
import ItemList from '../Components/ItemList';

export default function Select() {
  const [items, setItems] = useState([]);

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
      : Alert.alert('주의', '최대 6개까지 입력 가능합니다.', [{ text: 'OK' }]);
  };

  const onRemove = useCallback(
    (id) => {
      setItems(items.filter((item) => item.id !== id));
    },
    [items]
  );

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
          <Text style={styles.headerText}>오늘 뭐 먹지?</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.inputText}
            placeholder='메뉴를 입력해주세요'
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
              onCreate(text), onReset();
            }}
          >
            <Text style={styles.button}>add</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.text}>최대 6개까지 입력 가능합니다</Text>
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
              <ItemList items={items} onRemove={onRemove} />
            </View>
          </ScrollView>
        </View>
        <View>
          <MyButton title='작성완료'></MyButton>
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
