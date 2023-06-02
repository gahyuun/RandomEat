import backIcon from '../assets/backIcon.svg';
import { Button, TouchableOpacity } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import { Routes } from '../navigator/Routes';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(Routes.MAIN);
      }}
    >
      <WithLocalSvg asset={backIcon} />
    </TouchableOpacity>
  );
}
