import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import styles from "../styles/adminMenu";

export default function Model({ open, setOpen, data }) {
  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={open}
        transparent
        animationType="fade"
        style={styles.menuModalContainer}
      >
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>
          <View style={styles.overlay}>
            <View style={styles.modalContent}>
              <View style={styles.menuBar}>
                {data.map((item, idx) => (
                  <TouchableOpacity key={idx} style={styles.item}>
                    <Text style={styles.text}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
