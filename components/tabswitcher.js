import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const TabSwitcher = ({ tab, setTab }) => {
  return (
    <View style={styles.tabs}>
      <TouchableOpacity
        onPress={() => setTab("Personal")}
        style={tab === "Personal" ? styles.activeTab : styles.tab}
      >
        <Text
          style={tab === "Personal" ? styles.activeTabText : styles.tabText}
        >
          Personal
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setTab("Contact")}
        style={tab === "Contact" ? styles.activeTab : styles.tab}
      >
        <Text style={tab === "Contact" ? styles.activeTabText : styles.tabText}>
          Contact
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
  },
  tabText: {
    color: "#000",
  },
  activeTabText: {
    color: "#fff",
  },
});

export default TabSwitcher;
