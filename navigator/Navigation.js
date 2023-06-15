import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Routes } from "./Routes";
import Main from "../src/Main";
import SelectMenu from "../src/SelectMenu";
import SelectRoulette from "../src/SelectRoulette";
import SelectPerson from "../src/SelectPerson";
import Result from "../src/Result";
import Roulette from "../src/Roulette";

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#ffff" },
        }}
      >
        <Stack.Screen name={Routes.MAIN} component={Main} />
        <Stack.Screen name={Routes.SELECTROULETTE} component={SelectRoulette} />
        <Stack.Screen name={Routes.SELECTMENU} component={SelectMenu} />
        <Stack.Screen name={Routes.SELECTPERSON} component={SelectPerson} />
        <Stack.Screen name={Routes.RESULT} component={Result} />
        <Stack.Screen name={Routes.ROULETTE} component={Roulette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
