import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { itemState } from '../state';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function Roulette() {
  const navigation = useNavigation();

  const [currentText, setCurrentText] = useState('룰렛');
  const [color, setColor] = useState('#BFA2D8');
  const [start, setStart] = useState(false);
  const Items = useRecoilValue(itemState);
  const [item, setItem] = useRecoilState(itemState);

  useEffect(() => {
    if (start) {
      let intervalId;
      const start = Date.now();
      const end = start + 5000;

      const cycleTexts = () => {
        const elapsed = Date.now() - start;
        const index = Math.floor((elapsed / 500) % Items.length);
        setCurrentText(Items[index].text);
        setColor(colorItems[index]);

        if (Date.now() >= end) {
          clearInterval(intervalId);
          setCurrentText(Items[index].text);
          setColor(colorItems[index]);
          setItem([]);
        }
      };

      intervalId = setInterval(cycleTexts, 10);

      return () => clearInterval(intervalId);
    }
  }, [start]);

  const startRoulette = () => {
    setStart(true);
  };

  const colorItems = [
    '#693894',
    '#8457AB',
    '#9E7ABE',
    '#BFA2D8',
    '#D6BFEB',
    '#E7D5F5',
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          fontWeight: 700,
          fontSize: 30,
          color: '#693894',
          marginBottom: 100,
        }}
      >
        룰렛을 돌려주세요
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: '',
          height: 340,
        }}
      >
        <View
          style={{
            width: 260,
            height: 260,
            backgroundColor: color,
            borderWidth: 1,
            borderColor: '#EBEBEB',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 1,
            elevation: 2, // for Android
            borderRadius: 200,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View>
            <Text style={{ fontWeight: 700, fontSize: 30, color: '#ffff' }}>
              {currentText}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#693894',
          width: 150,
          height: 60,
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // shadowOffset: {
          //   width: 0,
          //   height: 2,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 4,
        }}
        onPress={startRoulette}
      >
        <Text
          style={{ backgroundColor: '#693894', color: '#ffffff', fontSize: 18 }}
        >
          룰렛 돌리기
        </Text>
      </TouchableOpacity>
    </View>
  );
}
