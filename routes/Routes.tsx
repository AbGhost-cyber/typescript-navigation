import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import { ParamsList } from "./ParamsList";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

interface RoutesProps {}

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator<ParamsList>();

export const Routes: FC<RoutesProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Tabs" component={BottomNavigator} />
    </Stack.Navigator>
  );
};

const BottomNavigator: FC = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Favorites" component={Favorites} />
      <BottomTab.Screen name="Search" component={Search} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};
