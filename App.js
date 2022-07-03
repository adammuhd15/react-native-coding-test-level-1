import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Local imports
import Main from "./src/screens/Main";
import ContactUs from "./src/screens/ContactUs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
      >
        <Stack.Screen
          name="Main"
          component={Main}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
