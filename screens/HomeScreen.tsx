import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavProps, ParamsList } from "../routes/ParamsList";

const HomeScreen = ({ navigation, route }: NavProps<"Home">) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Home</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
