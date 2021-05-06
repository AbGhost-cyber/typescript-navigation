import React, { FC } from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import { ParamsList } from "./ParamsList";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import TabBarButton from "../components/TabBarButton";

interface AppTabsProps {}

export type IconName = {
  icon: keyof typeof Ionicons.glyphMap;
};

const BottomTab = createBottomTabNavigator<ParamsList>();

export const TabBar: FC<AppTabsProps> = () => {
  return (
    <BottomTab.Navigator
      tabBar={(props) => (
        <View style={styles.navigationContainer}>
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconName["icon"] = "ios-leaf-sharp";
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "ios-heart" : "ios-heart-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: styles.navigator,
        labelStyle: {
          fontFamily: "product-sans-bold",
          fontSize: 11,
        },
        showLabel: false,
        activeTintColor: "white",
        inactiveTintColor: "black",
      }}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Favorites" component={FavoritesScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: "#2a5a77",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
