import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const logo = require("./../assets/logo.png");

export default function Login() {
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.mainTitle}>Login</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={username}
          onChangeText={setUsername}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={() => Alert.alert("Sucesso!", "Redirecionando...")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    alignContent: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },

  mainTitle: {
    fontFamily: "sans-serif",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },

  formContainer: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5,
  },

  input: {
    height: 50,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 7,
    textAlign: "left",
  },

  buttonView: {
    width: "100%",
    paddingHorizontal: 40,
    marginTop: 20,
  },

  button: {
    backgroundColor: "#181716",
    height: 45,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
