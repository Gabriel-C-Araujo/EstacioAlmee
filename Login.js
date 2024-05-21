import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Login() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <Text>This is login page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: npLBlue,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
