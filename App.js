import { StatusBar } from "react-native";
import Navigation from "./navigator/Navigation";
import { RecoilRoot } from "recoil";
import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  useEffect(() => {
    const hideSplashScreen = async () => {
      await SplashScreen.preventAutoHideAsync();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await SplashScreen.hideAsync();
    };

    hideSplashScreen();
  }, []);

  return (
    <>
      <RecoilRoot>
        <StatusBar style="dark" />
        <Navigation />
      </RecoilRoot>
    </>
  );
}
