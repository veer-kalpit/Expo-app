import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const PersonalForm = ({
  name,
  setName,
  dob,
  setDob,
  phone,
  setPhone,
  email,
  setEmail,
  role,
  setRole,
  referencedBy,
  setReferencedBy,
}) => {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Name*</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Date of Birth*</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={(text) => setDob(text)}
        placeholder="Enter your date of birth"
      />

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

      <Text style={styles.label}>Role*</Text>
      <TextInput
        style={styles.input}
        value={role}
        onChangeText={(text) => setRole(text)}
        placeholder="Enter your role"
      />

      <Text style={styles.label}>Referenced by</Text>
      <TextInput
        style={styles.input}
        value={referencedBy}
        onChangeText={(text) => setReferencedBy(text)}
        placeholder="Enter reference"
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

export default PersonalForm;
