import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';
import Main from '../src/Main';
import Select from '../src/Select';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{ contentStyle: { backgroundColor: '#ffff' } }}
        initialRouteName='Main'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={Routes.MAIN} component={Main} />
        <Stack.Screen name={Routes.SELECT} component={Select} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;