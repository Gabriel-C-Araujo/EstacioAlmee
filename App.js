import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { Button } from 'react-native-web';
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import Login from "./components/Login";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
