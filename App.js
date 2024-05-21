import { SafeAreaViewBase, StatusBar, StyleSheet, Text } from "react-native";

export default function Login() {
  return (
    <SafeAreaViewBase style={styles.safeArea}>
      <Text>This is login page</Text>
    </SafeAreaViewBase>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: npLBlue,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 70,
  },
});

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import {Calendar, LocaleConfig} from 'react-native-calendars';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
