import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import styles from "./../styles/employeeList.js";
import Header from "../components/Header.jsx";
import { useNavigation } from "@react-navigation/native";

export default function EmployeeList() {
  const navigation = useNavigation();

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.employeeData}>
      <Text style={styles.employeeName}>
        {item.name}
        {item.id}
      </Text>
      <TouchableOpacity
        onPress={() => goToEmployeeScreen(item.id)}
        style={styles.viewBtn}
      >
        <Text style={styles.viewBtnText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  const goToEmployeeScreen = (id) => {
    console.log(id);
    navigation.navigate("EmployeeScreen", { id });
  };

  return (
    <>
      <Header />
      <View style={styles.employScreen}>
        <View style={styles.adminTitleBox}>
          <Text style={styles.adminTitle}>Employees' List</Text>
        </View>

        <View style={styles.searchInputBox}>
          <TextInput
            placeholder="Search Employee"
            // autoComplete="true"
            style={styles.searchInput}
          />
          <View style={styles.searchBtn}>
            <MagnifyingGlassIcon size={30} style={styles.searchBtnIcon} />
          </View>
        </View>

        <View style={styles.employeeListContainer}>
          {/* {employeeData.map((item, idx) => {
            <View key={idx} style={styles.employeeData}>
              <Text style={styles.employeeName}>
                {item.name}
                {item.id}
              </Text>
              <TouchableOpacity
                onPress={() => goToEmployeeScreen(item.id)}
                style={styles.viewBtn}
              >
                <Text style={styles.viewBtnText}>View</Text>
              </TouchableOpacity>
            </View>;
          })} */}
          <FlatList
            data={employeeData}
            renderItem={renderItem}
            keyExtractor={(employee) => employee.id.toString()}
          />
        </View>
      </View>
    </>
  );
}
