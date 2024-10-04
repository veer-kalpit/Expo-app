import React, { useState } from "react";
import {
  View,
  Alert,
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Icon, Button } from "react-native-elements";
import HamburgerMenu from "./components/hamburger";
import TabSwitcher from "./components/tabswitcher";
import PersonalForm from "./components/personal";
import ContactForm from "./components/contactform";
import SavedDetailsModal from "./components/saveddetail";

const ProfileForm = () => {
  const [tab, setTab] = useState("Personal");
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // State variables to hold form input values
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [referencedBy, setReferencedBy] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");

  // State to store saved details
  const [savedDetails, setSavedDetails] = useState({});

  // Toggles the menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Show saved details in a modal
  const showSavedDetails = () => {
    setModalVisible(true);
  };

  // Function to handle the "Save" button click
  const handleSave = () => {
    const details = {
      name,
      dob,
      phone,
      email,
      role,
      referencedBy,
      instagram,
      linkedin,
    };
    setSavedDetails(details);
    Alert.alert("Details Saved", "Your details have been successfully saved.");
  };

  return (
    <View style={styles.container}>
      {/* Header with Hamburger and Profile Icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Icon name="menu" type="feather" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={showSavedDetails}>
          <Icon name="user" type="feather" size={30} />
        </TouchableOpacity>
      </View>

      {/* Hamburger Menu */}
      {menuVisible && <HamburgerMenu />}

      {/* Tab Switcher */}
      <TabSwitcher tab={tab} setTab={setTab} />

      {/* Conditional Form Fields based on selected Tab */}
      {tab === "Personal" ? (
        <PersonalForm
          name={name}
          setName={setName}
          dob={dob}
          setDob={setDob}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          role={role}
          setRole={setRole}
          referencedBy={referencedBy}
          setReferencedBy={setReferencedBy}
        />
      ) : (
        <ContactForm
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          instagram={instagram}
          setInstagram={setInstagram}
          linkedin={linkedin}
          setLinkedin={setLinkedin}
        />
      )}

      {/* Save Button */}
      <Button
        title="Save"
        buttonStyle={styles.saveButton}
        onPress={handleSave}
      />

      {/* Modal to display saved user details */}
      <SavedDetailsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        savedDetails={savedDetails}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  saveButton: {
    backgroundColor: "#000",
    borderRadius: 30,
  },
});

export default ProfileForm;
