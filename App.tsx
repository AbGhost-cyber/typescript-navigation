import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Routes } from "./routes/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

