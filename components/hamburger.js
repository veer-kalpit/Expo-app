import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, } from "react-native";

const HamburgerMenu = () => {
  const handlePress = () => {
    // Add your onPress functionality here
    Alert.alert("My Profile", "Button Pressed");
  };

  return (
    <View style={styles.menu}>
      <TouchableOpacity style={styles.menuItem} onPress={handlePress}>
        <Text style={styles.menuText}>My Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Team</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Clients</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>My Team</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    left: 0,
    top: 100,
    backgroundColor: "#333",
    width: 200,
    height: '50%',
    zIndex: 1,
    padding: 10,
    borderRadius:10
  },
  menuItem: {
   padding:20,
    paddingVertical: 15,
  },
  menuText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default HamburgerMenu;
