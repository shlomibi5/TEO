import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "shlomi" && password === "1234") {
      navigation.navigate("StartGame");
    } else {
      alert("שם משתמש או סיסמה שגויים!");
    }
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#110C51", "#110C51", "#110C51", "#7C7C7C"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 0, y: 0 }}
        locations={[0, 0.25, 0.75, 1]}
        style={styles.gradient}
      >
        <Image source={require("/assets/icon.png")} style={styles.logo} />
        <Text style={styles.subtitle}>פעם ראשונה פה?</Text>
        <Text style={styles.register}>הרשמה</Text>
        <TextInput
          style={styles.input}
          placeholder="מייל"
          placeholderTextColor="#aaaaaa"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="סיסמא"
          placeholderTextColor="#aaaaaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <LinearGradient
            colors={["#9743A1", "#4c2474"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.3, 1]}
            style={styles.borderLogin}
          >
            <Text style={styles.buttonText}>התחבר</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.buttonSocial}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#531a84", "#4a12a5"]}
              start={{ x: 0.5, y: 0.7 }}
              end={{ x: 0.5, y: 1 }}
              locations={[0.3, 1]}
              style={styles.button_f_g}
            >
              <Image
                source={require("/assets/icons/google.png")}
                style={styles.iconSocial}
              />
              <Text style={styles.buttonText_f_g}>כניסה עם גוגל</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={["#531a84", "#4a12a5"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              locations={[0.3, 1]}
              style={styles.button_f_g}
            >
              <Image
                source={require("/assets/icons/facebook.png")}
                style={styles.iconSocial}
              />
              <Text style={styles.buttonText_f_g}>כניסה עם פייסבוק</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  subtitle: {
    fontSize: 22,
    color: "white",
    fontWeight: "500",
  },
  register: {
    fontSize: 16,
    color: "#9743a1",
    fontWeight: "500",
    marginBottom: 60,
  },
  input: {
    color: "white",
    width: "60%",
    height: 50,
    borderWidth: 3,
    borderColor: "#aaaaaa",
    borderRadius: 25,
    marginBottom: 16,
    paddingHorizontal: 12,
    backgroundColor: "rgb(178 34 34 / 0%)",
    textAlign: "right",
    fontWeight: "bold",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#dfd8d854",
    shadowOpacity: 0.9,
    shadowRadius: 20,
  },
  buttonSocial: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    borderRadius: 50,
    width: "50%",
    textAlign: "center",
    marginVertical: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#dfd8d854",
    shadowOpacity: 0.9,
    shadowRadius: 20,
  },
  button_f_g: {
    borderRadius: 100,
    width: "170px",
    textAlign: "center",
    backgroundColor: "#4A12A5",
    paddingVertical: 14,
    paddingHorizontal: 5,
    marginVertical: 40,
    marginHorizontal: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "#dfd8d854",
    shadowOpacity: 0.9,
    shadowRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
    width: "100%",
    paddingVertical: 14,
    paddingHorizontal: 38,
  },
  buttonText_f_g: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  borderLogin: {
    borderRadius: 100,
  },
  iconSocial: {
    width: "18px",
    height: "24px",
    marginHorizontal: 10,
  },
});

export default LoginScreen;
