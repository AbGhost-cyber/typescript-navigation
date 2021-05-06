import React, { FC } from "react";
import {
  createBottomTabNavigator,
  BottomTabBar,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import { ParamsList } from "./ParamsList";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import TabBarButton from "../components/TabBarButton";
import { IconName } from "./Routes";

const Tab = createBottomTabNavigator<ParamsList>();

const MyTabBar: FC<BottomTabBarProps> = (props) => {
  return (
    <View style={styles.container}>
      {props.state.routes.map((route, index) => {
        const { options } = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = props.state.index === index;
        const event = props.navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
          data: undefined,
        });

        const onPress = () => {
          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        function configureIcon(): IconName["icon"] {
          if (route.name === "Home") return "ios-home-outline";
          else if (route.name === "Favorites") return "ios-heart-outline";
          else if (route.name === "Search") return "ios-search-outline";
          else return "ios-person-outline";
        }

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onLongPress={onLongPress}
            //style={{ flex: 1/2 }}
            style={{ width: 118, marginEnd: 4, flexWrap: "wrap" }}
          >
            <TabBarButton
              iconTint="#5841AB"
              icon={configureIcon()}
              bgTintColor="#BDB0DC"
              onPress={onPress}
              isFocused={isFocused}
              text={label.toString()}
              isFirst={props.state.index === 0}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export const BottomBars: FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    height: 70,
    alignItems: "flex-end",
    marginBottom: 9,
    justifyContent: "space-around",
    width: "100%",
    flex: 1,
  },
});
