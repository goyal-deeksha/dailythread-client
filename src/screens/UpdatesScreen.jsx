import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/updatesScreenStyle";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import messageList from "../assets/messageList";

export default function UpdatesScreen() {
  const [selectedItem, setSelectedItem] = useState("Select Project");
  const [sendingTime, setSendingTime] = useState({});
  const [showDropDownMenu, setShowDropDownMenu] = useState(false);
  const [data, setData] = useState({
    project: selectedItem,
    billableHours: "",
    nonBillableHours: "",
    totalHours: "",
    completedTasks: "",
    workedTasks: "",
  });

  const {
    project,
    billableHours,
    nonBillableHours,
    totalHours,
    completedTasks,
    workedTasks,
  } = data;

  const onGoingProjects = [
    "Next-App",
    "Daily Thread",
    "Demo Project",
    "Learning",
  ];

  const dateTime = () => {
    let datetime = new Date();
    let deepCopyDatetime = new Date(datetime.valueOf());

    let date = deepCopyDatetime.getDate();
    let currMonth = deepCopyDatetime.getMonth();
    let year = deepCopyDatetime.getFullYear();
    let hour = deepCopyDatetime.getHours();
    let min = deepCopyDatetime.getMinutes();

    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    min = min.toString().padStart(2, "0");
    let currMonthName = monthNames[currMonth];
    let amPm = hour >= 12 ? "PM" : "AM";

    if (hour > 12) {
      hour = hour - 12;
    }

    if (date === datetime.getDate()) {
      date = "Today";
      currMonthName = "";
    } else if (date === datetime.getDate() - 1) {
      date = "Yesterday";
      currMonthName = "";
    }

    const currDateTime = {
      date: `${date}`,
      currMonthName: `${currMonthName}`,
      year: `${year}`,
      min: `${min}`,
      hour: `${hour}`,
      amPm: `${amPm}`,
    };

    return currDateTime;
  };

  const handleSubmitUpdates = () => {
    data.workedTasks =
      typeof data.workedTasks === "string" ? data.workedTasks.split("\n") : [];
    data.completedTasks =
      typeof data.completedTasks === "string"
        ? data.completedTasks.split("\n")
        : [];

    setSendingTime(dateTime());
    messageList.push(data);
  };

  return (
    <SafeAreaView style={styles.updatesContainer}>
      <Header />
      <ScrollView
        keyboardShouldPersistTaps="never"
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.updatesForm}>
          <View style={styles.inputWrapper}>
            <Dropdown
              title="Project"
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              showDropDownMenu={showDropDownMenu}
              setShowDropDownMenu={setShowDropDownMenu}
              dropdownList={onGoingProjects}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Billable Hours</Text>
            <TextInput
              placeholder="Billable Hours"
              value={data.billableHours}
              onChangeText={(text) => setData({ ...data, billableHours: text })}
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Non-Billable Hours</Text>
            <TextInput
              placeholder="Non-Billable Hours"
              value={data.nonBillableHours}
              onChangeText={(text) =>
                setData({ ...data, nonBillableHours: text })
              }
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Total Daily Hours</Text>
            <TextInput
              placeholder="Total Hours"
              value={data.totalHours}
              onChangeText={(text) =>
                setData({ ...data, totalDailyHours: text })
              }
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Total Weekly Hours</Text>
            <TextInput
              placeholder="Total Hours"
              value={data.totalHours}
              onChangeText={(text) =>
                setData({ ...data, totaldailyHours: text })
              }
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.label}>Completed Tasks</Text>
            <TextInput
              multiline
              numberOfLines={1} // Set initial number of lines
              maxHeight={140}
              placeholder="One task in a line"
              value={data.completedTasks}
              onChangeText={(text) =>
                setData({ ...data, completedTasks: text })
              }
              style={styles.input}
            />
          </View>
          <View>
            <Text style={styles.label}>Worked Tasks</Text>
            <TextInput
              multiline
              numberOfLines={1} // Set initial number of lines
              maxHeight={140}
              placeholder="One task in a line"
              value={data.workedTasks}
              onChangeText={(text) => setData({ ...data, workedTasks: text })}
              style={styles.input}
            />
          </View>
          <View style={styles.submitBtnBox}>
            <TouchableOpacity
              onPress={handleSubmitUpdates}
              style={styles.submitBtn}
            >
              <Text style={styles.btnText}>Submit Updates</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
