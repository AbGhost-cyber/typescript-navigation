import React, { FC, useRef } from "react";
import {
  createBottomTabNavigator,
  BottomTabBarProps,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
  StyleProp,
  TextStyle,
} from "react-native";

import HomeScreen from "../screens/HomeScreen";
import { ParamsList } from "./ParamsList";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import TabBarButton from "../components/TabBarButton";
import { IconName } from "./Routes";

type myThings = {
  iconTint: string;
  bgColor: string;
  iconName: IconName["icon"];
};
interface m extends BottomTabBarProps {
  myOptions: BottomTabNavigationOptions & myThings;
}

const MyTabBar: FC<BottomTabBarProps> = (props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  // const interpolateBar = animatedValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ["100%", "90%"],
  // });
  return (
    <Animated.View style={[styles.container]}>
      {props.state.routes.map((route, index) => {
        const { options } = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = props.state.index === index;
        // const {backgroundColor} = options.tabBarBadgeStyle;

        const m = (options.tabBarBadgeStyle as unknown) as TextStyle;
        console.log(m.color);

        //emit event to the child screen
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
            style={{ width: isFocused ? 120 : 80 }}
          >
            <TabBarButton
              iconTint="#5841AB"
              icon={configureIcon()}
              bgTintColor="#BDB0DC"
              onPress={() => onPress()}
              isFocused={isFocused}
              text={label.toString()}
              isFirst={props.state.index === 0}
            />
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

const Tab = createBottomTabNavigator<ParamsList>();

export const BottomBars: FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarBadgeStyle: {
            backgroundColor: "#BDB0DC",
            color: "#0000",
          },
        }}
      />
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
    width: "100%",
    justifyContent: "space-between",
  },
});
