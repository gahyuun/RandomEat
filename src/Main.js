import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';
import { Routes } from '../navigator/Routes';

export default function Main() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        title='Select'
        onPress={() => {
          navigation.navigate(Routes.SELECT);
        }}
      ></Button>
    </View>
  );
}
