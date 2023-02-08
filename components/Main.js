import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import WeekScreen from "../screens/Week";

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <MainStack.Screen
          options={{ headerShown: false }}
          name="Week"
          component={WeekScreen}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
