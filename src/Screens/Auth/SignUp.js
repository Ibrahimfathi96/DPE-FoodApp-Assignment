import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./SignUp.styles";
import { LinearGradient } from "expo-linear-gradient";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("OldHome");
  };

  const signUpOnPress = () => {
    if (email === "" || password === "" || rePassword === "") {
      alert("Fields are required");
      console.log("Fields are required");
    } else if (password !== rePassword) {
      alert("Error! Passwords do not match.");
      console.log("Error! Passwords do not match.");
    } else if (!email.includes("@gmail.com")) {
      alert("Error! Please enter a valid email address."); //must contain @gmail.com
      console.log("Error! Please enter a valid email address.");
    } else {
      console.log("Passwords match!");
      navigateToHome();
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={{ marginVertical: 50 }}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="e-mail"
            name="name"
            onChangeText={(email) => {
              setEmail(email);
            }}
            value={email}
            maxLength={25}
            keyboardType="email-address"
            placeholderTextColor={"grey"}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="password"
            name="name"
            onChangeText={(password) => {
              setPassword(password);
            }}
            value={password}
            maxLength={25}
            secureTextEntry
            placeholderTextColor={"grey"}
          ></TextInput>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="re-password"
            name="name"
            onChangeText={(rePassword) => {
              setRePassword(rePassword);
            }}
            value={rePassword}
            maxLength={25}
            secureTextEntry
            placeholderTextColor={"grey"}
          ></TextInput>
        </View>
      </View>

      <View>
        <View style={styles.inputView}>
          <TouchableOpacity onPress={signUpOnPress}>
            <LinearGradient
              colors={["#1891D9", "#17A7D4", "#12BCCE"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}
            >
              <Text style={styles.text1}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text2}>Read User License Agreement</Text>
        </View>
      </View>
    </View>
  );
}
