import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabBarSample from "../components/TabBarSample";

import { NavProps, ParamsList } from "../routes/ParamsList";

const HomeScreen = ({ navigation, route }: NavProps<"Home">) => {
  return <TabBarSample />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
