import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const ContactForm = ({
  phone,
  setPhone,
  email,
  setEmail,
  instagram,
  setInstagram,
  linkedin,
  setLinkedin,
}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Phone No*</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Email-id*</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Instagram</Text>
      <TextInput
        style={styles.input}
        value={instagram}
        onChangeText={(text) => setInstagram(text)}
        placeholder="Enter your Instagram username"
      />

      <Text style={styles.label}>LinkedIn</Text>
      <TextInput
        style={styles.input}
        value={linkedin}
        onChangeText={(text) => setLinkedin(text)}
        placeholder="Enter your LinkedIn profile"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default ContactForm;
