import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const { emBaseUrl } = Constants.manifest.extra ?? {};

export default function App() {
  const {} = {};
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <WebView
          originWhitelist={["*"]}
          source={{ uri: emBaseUrl }}
          style={{ flex: 1 }}
        />
      </SafeAreaView>
    </>
  );
}
