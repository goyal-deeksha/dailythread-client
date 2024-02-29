import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import styles from "./../styles/adminScreenStyle.js";
import employeeData from "./employeeData.js";
import { useNavigation } from "@react-navigation/native";
import Pie from "../components/Pie.jsx";
import { themeColors } from "../theme/theme.js";
import { hoursCalculator } from "../utils/admin.js";
import DatePickerModel from "../components/DatePickerModel.jsx";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { auth } from "../config/firebase.js";

// console.log(employeeData);

export default function AdminScreen() {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const showHours = hoursCalculator(employeeData);

  const data = [
    { percentage: 30, color: "#FF5733" },
    { percentage: 45, color: "#00FF00" },
    { percentage: 25, color: "#0000FF" },
  ];

  menuData = [
    {
      id: 1,
      name: "Log out",
      handleClick: async () => {
        try {
          await auth().signOut();
          console.log("User logged out successfully");
          navigation.navigate("LoginScreen");
        } catch (error) {
          console.error("Error signing out:", error.message);
        }
      },
    },
  ];

  const handleStartDate = () => {
    setOpenModal(!openModal);
  };
  const handleEndDate = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <Header data={menuData} open={openMenu} setOpen={setOpenMenu} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.adminScreen}>
          <View style={styles.datePickerContainer}>
            <View style={styles.datePickerWrapper}>
              <Text style={styles.dateLabel}>From</Text>
              <Text style={styles.colonStyle}>: </Text>
              <View style={styles.dateInputWrapper}>
                <TextInput
                  placeholder="DD/MM/YYYY"
                  keyboardType="phone-pad"
                  value={startDate}
                  style={styles.dateInput}
                />
                <TouchableOpacity onPress={handleStartDate}>
                  <CalendarDaysIcon
                    size={30}
                    color={themeColors.secondaryText(1)}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.datePickerWrapper}>
              <Text style={styles.dateLabel}>To </Text>
              <Text style={styles.colonStyle}>: </Text>
              <View style={styles.dateInputWrapper}>
                <TextInput
                  placeholder="DD/MM/YYYY"
                  keyboardType="phone-pad"
                  value={endDate}
                  style={styles.dateInput}
                />
                <TouchableOpacity onPress={handleEndDate}>
                  <CalendarDaysIcon
                    size={30}
                    color={themeColors.secondaryText(1)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Pie />

          <TouchableOpacity
            onPress={() => navigation.navigate("EmployeeList")}
            style={{
              width: "100%",
              alignItems: "center",
              backgroundColor: themeColors.secondaryText(1),
              paddingVertical: 12,
              borderRadius: 50,
            }}
          >
            <View>
              <Text style={{ fontSize: 22, fontWeight: "500", color: "#fff" }}>
                See all employees
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {openModal && (
          <DatePickerModel
            openModal={openModal}
            setOpenModal={setOpenModal}
            selectedDate={startDate}
            setSelectedDate={setStartDate}
          />
        )}
      </ScrollView>
    </>
  );
}
