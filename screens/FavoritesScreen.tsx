import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavProps, ParamsList } from "../routes/ParamsList";

const FavoritesScreen = ({ navigation, route }: NavProps<"Favorites">) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
      }}
    />
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
