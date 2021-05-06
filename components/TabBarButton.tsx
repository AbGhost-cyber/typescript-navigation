import React, { FC, useRef, useCallback, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ColorValue,
  Animated,
  Text,
} from "react-native";
import { IconName } from "../routes/Routes";
import { Easing } from "react-native-reanimated";

interface TabBarButtonProps {
  iconTint: ColorValue;
  onPress: () => void;
  bgTintColor: ColorValue;
  text: string;
  icon: IconName["icon"];
  isFocused: boolean;
  isFirst: boolean;
}

const TabBarButton: FC<TabBarButtonProps> = (props) => {
  let opacity = useRef(new Animated.Value(0)).current;
  let width = useRef(new Animated.Value(1)).current;

  //animate on start aside when being pressed
  useEffect(() => {
    if (props.isFocused) {
      animateTabItem();
    }
  }, []);

  const animateTabItem = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <TouchableOpacity
      activeOpacity={2}
      onPress={() => {
        props.onPress();
        animateTabItem();
      }}
    >
      <Animated.View
        style={[
          styles.parent,
          {
            backgroundColor: props.isFocused ? props.bgTintColor : undefined,
            transform:
              props.isFocused && !props.isFirst
                ? [
                    {
                      translateX: opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [10, -5],
                      }),
                    },
                  ]
                : props.isFirst && props.isFocused
                ? [
                    {
                      translateX: opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-10, 20],
                      }),
                    },
                  ]
                : [],
          },
        ]}
      >
        <Animated.View
          style={{
            transform:
              props.isFocused && !props.isFirst
                ? [
                    {
                      translateX: opacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [10, 1],
                      }),
                    },
                  ]
                : props.isFirst && props.isFocused
                ? []
                : [],
          }}
        >
          <Ionicons
            name={props.icon}
            size={24}
            color={props.isFocused ? props.iconTint : "grey"}
          />
        </Animated.View>

        {props.isFocused && (
          <Animated.Text
            style={{
              marginTop: 4,
              marginStart: 5,
              fontFamily: "product-sans-bold",
              color: props.iconTint,
              opacity: props.isFocused ? opacity : 1,
            }}
          >
            {props.text}
          </Animated.Text>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  parent: {
    flexDirection: "row",
    borderRadius: 20,
    paddingVertical: 14,
    justifyContent: "center",
    width: 110,
    // alignItems: "center",
  },
});
