import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./../styles/message";
import photo from "../assets/bharat.jpeg";

export default function Message({ item }) {
  return (
    <View style={styles.messageContainer}>
      <View style={styles.updateDateBox}>
        {/* <Text
          style={styles.updateDate}
        >{`${item.time.date}  ${item.time.currMonthName}`}</Text> */}
      </View>
      <View style={styles.senderInfoWrapper}>
        <View style={styles.profilePhoto}>
          <Image source={photo} style={styles.photo} />
        </View>
        <View style={styles.senderInfo}>
          <View>
            <Text style={styles.senderName}>{item.senderName}</Text>
            {/* <Text
              style={styles.messageTime}
            >{`${item.time.hour} : ${item.time.min} ${item.time.amPm}`}</Text> */}
          </View>
        </View>
      </View>
      <View style={styles.textBox}>
        <Text multiline style={styles.text}>
          {item.message}
        </Text>
      </View>
    </View>
  );
}
