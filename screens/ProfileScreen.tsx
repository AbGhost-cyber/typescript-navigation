import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavProps } from "../routes/ParamsList";

const ProfileScreen = ({ navigation, route }: NavProps<"Profile">) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
      }}
    />
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
