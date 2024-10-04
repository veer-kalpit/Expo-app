import React from "react";
import { View, Text, Modal, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";

const SavedDetailsModal = ({ modalVisible, setModalVisible, savedDetails }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Saved Details</Text>
          <ScrollView>
            {Object.entries(savedDetails).map(([key, value]) => (
              <Text key={key} style={styles.modalLabel}>
                {key}: {value}
              </Text>
            ))}
          </ScrollView>
          <Button
            title="Close"
            buttonStyle={styles.closeButton}
            onPress={() => setModalVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: "#000",
    borderRadius: 30,
    marginTop: 20,
  },
});

export default SavedDetailsModal;
