import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavProps } from "../routes/ParamsList";

const SearchScreen = ({ navigation, route }: NavProps<"Search">) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Search</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
