import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

import { TabBar } from "./routes/Routes";
import { BottomBars } from "./routes/CustomRoute";
enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "product-sans-bold": require("./assets/fonts/product-sans-bold.ttf"),
    "product-sans": require("./assets/fonts/product-sans.ttf"),
  });
};

export default function App() {
  const [fontIsLoaded, setFontIsLoaded] = useState<boolean>(false);

  if (!fontIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontIsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <NavigationContainer>
      <BottomBars />
    </NavigationContainer>
  );
}
