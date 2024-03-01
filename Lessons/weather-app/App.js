import { Provider } from "react-redux";
import { store } from "./redux/store";
import Weather from "./components/Weather";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import CityWeather from "./components/CityWeather";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={
              {
                title: "Weather in your city",
              }}></Stack.Screen>
          <Stack.Screen name="Weather" component={Weather} ></Stack.Screen>
          <Stack.Screen name="CityWeather" component={CityWeather} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
};