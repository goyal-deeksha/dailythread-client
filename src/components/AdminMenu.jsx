import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./../styles/adminMenu.js";

export default function AdminMenu({ open, setOpen, data }) {
  return (
    <View style={styles.modelContainer}>
      <Modal animationType="fade" transparent={true} style={styles.model}>
        <TouchableOpacity
          onPress={() => setOpen(!open)}
          style={styles.centerView}
        >
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              {data.map((item) => (
                <View key={item.id} style={styles.menuBar}>
                  <TouchableOpacity
                    onPress={() => item.handleClick}
                    style={styles.item}
                  >
                    <Text style={styles.text}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
