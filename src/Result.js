import MyButton from '../components/input/MyButton';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../navigator/Routes';
import { View, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { resultState } from '../state';

export default function Result() {
  const navigation = useNavigation();
  const result = useRecoilValue(resultState);
  return (
    <View>
      {/**룰렛 완성되면 진짜 데이터 받아와야 함 */}
      <View style={{ marginTop: 250, alignItems: 'center', marginBottom: 25 }}>
        <Text style={{ fontSize: 45, fontWeight: 'bold' }}>결과: {result}</Text>
      </View>
      <View style={{ marginBottom: 50, alignItems: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: '900', color: '#693894' }}>
          룰렛 결과 어때요?
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={{ marginBottom: 25, width: 150 }}>
          <MyButton
            title='만족해요'
            onPress={() => {
              navigation.navigate(Routes.MAIN);
            }}
          />
        </View>
        <View style={{ width: 150 }}>
          <MyButton
            title='다시 할래요'
            onPress={() => {
              navigation.navigate(Routes.ROULETTE);
            }}
          />
        </View>
      </View>
    </View>
  );
}
