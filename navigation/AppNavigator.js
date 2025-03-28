import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../views/Login";
import Event from "../views/Event";
import EventDetail from '../views/EventDetail';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EventCatalog"
          component={Event}
          options={{ title: "Event Catalog" }}
        />
        <Stack.Screen
          name="EventDetail"
          component={EventDetail}
          options={{ title: "Event Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
