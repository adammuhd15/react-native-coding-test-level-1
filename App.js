import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ReduxProvider } from "react-redux";

// Local imports
import Main from "./src/screens/Main";
import ContactUs from "./src/screens/ContactUs";
import CatalogList from "./src/screens/CatalogList";
import CatalogDetail from "./src/screens/CatalogDetail";
import store from "./src/redux/store";
import { capitalizeFirstAlphabet } from "./src/services/helper/CapitalizeFirst";
import BackButton from "./src/components/BackButton";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
        >
          <Stack.Screen
            name="Main"
            component={Main}
            options={{
              title: "Home"
            }}
          />
          <Stack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{
              title: "Contact Us"
            }}
          />
          <Stack.Screen
            name="CatalogList"
            component={CatalogList}
            options={{
              title: "Catalog"
            }}
          />
          <Stack.Screen
            name="CatalogDetail"
            component={CatalogDetail}
            options={(navProps) => ({
              title: capitalizeFirstAlphabet(navProps.route.params?.name),
              headerLeft: () => (
                <BackButton
                  navigation={navProps.navigation}
                  route={navProps.route}
                />
              )
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
