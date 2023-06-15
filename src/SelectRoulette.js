import Header from "../components/Header";
import { View } from "react-native";
import MyButton from "../components/input/MyButton";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "../navigator/Routes";

export default function SelectRoulette() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 0.95,
      }}
    >
      <View style={{ marginTop: 65, marginLeft: 25 }}>
        <Header />
      </View>
      <View style={{ marginTop: 250, alignItems: "center" }}>
        <View style={{ marginBottom: 50, width: 230 }}>
          <MyButton
            title="오늘의 메뉴는?"
            onPress={() => {
              navigation.navigate(Routes.SELECTMENU);
            }}
          ></MyButton>
        </View>
        <View style={{ width: 230 }}>
          <MyButton
            title="오늘 결제할 사람은?"
            onPress={() => {
              navigation.navigate(Routes.SELECTPERSON);
            }}
          ></MyButton>
        </View>
      </View>
    </View>
  );
}
