import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavProps } from "../routes/ParamsList";

const SearchScreen = ({ navigation, route }: NavProps<"Search">) => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "blue",
    }}
  />
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
