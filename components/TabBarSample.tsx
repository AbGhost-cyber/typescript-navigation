import React, { useCallback, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import Ripple from "react-native-material-ripple";
import FA from "@expo/vector-icons/FontAwesome5";

const AnimatedIcon = Animated.createAnimatedComponent(FA);
const TabBarSample = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const interpolateIcon = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const interpolateBar = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["100%", "90%"],
  });

  const animatedTransition = Animated.spring(animatedValue, {
    toValue: 1,
    useNativeDriver: false,
  });
  const [anim, setAnim] = useState(false);

  const handleAnim = useCallback(() => {
    setAnim((prevState) => !prevState);
    if (anim) {
      animatedTransition.start();
    } else {
      animatedTransition.reset();
    }
  }, [anim]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.search}>
          <Animated.View style={{ width: interpolateBar }}>
            <TextInput placeholder="search here" style={styles.input} />
          </Animated.View>
          <AnimatedIcon
            name="search"
            size={28}
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              transform: [
                {
                  scale: interpolateIcon,
                },
              ],
            }}
          />
        </View>
        <Button title="animate icon" onPress={() => handleAnim()} />
      </View>
    </SafeAreaView>
  );
};

export default TabBarSample;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "gray",
    textAlign: "center",
  },
  container: {
    backgroundColor: "#F79D42",
    // flex: 1,
    height: "100%",
    paddingTop: 20,
    flexDirection: "column",
    // justifyContent: 'center',
    alignItems: "center",
  },
  search: {
    flexDirection: "row-reverse",
    width: "90%",
    height: 40,
    alignItems: "center",
  },
});
