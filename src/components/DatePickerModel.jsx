import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
// import DatePicker from "react-native-date-picker";
import DatePicker from "react-native-modern-datepicker";
import styles from "./../styles/datePickerModel.js";
import { themeColors } from "../theme/theme.js";

export default function DatePickerModel({
  openModal,
  setOpenModal,
  selectedDate,
  setSelectedDate,
}) {
  const [date, setDate] = useState(new Date());
  console.log(selectedDate);

  console.log(openModal, setOpenModal);
  return (
    <View style={styles.modelContainer}>
      <Modal animationType="slide" transparent={true} style={styles.model}>
        <TouchableOpacity
          onPress={() => setOpenModal(!openModal)}
          style={styles.centerView}
        >
          <View style={styles.modalView}>
            <DatePicker
              mode="date"
              maximumDate="2024-07-25"
              onSelectedChange={(date) => setSelectedDate(date)}
              style={styles.datepicker}
              options={{
                mainColor: themeColors.secondaryText(1),
                textHeaderColor: themeColors.secondaryText(1),
                textSecondaryColor: themeColors.secondaryText(1),
                textDefaultColor: "black",
                selectedTextColor: "#fff",
              }}
            />
            <View style={styles.setButtonBox}>
              <TouchableOpacity
                onPress={() => setOpenModal(!openModal)}
                style={styles.setButton}
              >
                <Text style={styles.setButtonText}>Set</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
