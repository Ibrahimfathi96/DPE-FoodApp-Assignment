import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./SignUp.styles";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("HomeScreen");
  };

  const signUpOnPress = () => {
    if (email === "" || password === "" || rePassword === "") {
      console.log("Fields are required");
    } else if (password !== rePassword) {
      console.log("Error! Passwords do not match.");
    } else {
      console.log("Passwords match!");
      navigateToHome(); // Only navigate when everything is valid
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 1 }}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </View>
      <View style={{ flex: 1 }}></View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="e-mail"
          name="name"
          onChangeText={(email) => {
            setEmail(email);
          }}
          value={email}
          maxLength={12}
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
          maxLength={12}
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
          maxLength={12}
          secureTextEntry
          placeholderTextColor={"grey"}
        ></TextInput>
      </View>
      <View style={{ flex: 3 }}></View>
      <View style={styles.inputView}>
        <TouchableOpacity onPress={signUpOnPress} style={styles.button}>
          <Text style={styles.text1}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.text2}>Read User License Agreement</Text>
      </View>
    </View>
  );
}
