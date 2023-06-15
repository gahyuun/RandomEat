import { View } from "react-native";
import MyButton from "../components/input/MyButton";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigator/Routes";
import Header from "../components/Header";

export default function Roulette() {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 250 }}>
      <Header />
      <View>
        <MyButton
          title="룰렛돌리기"
          onPress={() => {
            navigation.navigate(Routes.RESULT);
          }}
        />
      </View>
    </View>
  );
}
