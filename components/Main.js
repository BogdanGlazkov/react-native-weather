import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import WeekScreen from "../screens/Week";

const MainStack = createBottomTabNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
      >
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
