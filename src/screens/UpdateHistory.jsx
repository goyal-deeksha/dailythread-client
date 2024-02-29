import {
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/updateHistoryStyle";
import Header from "../components/Header";
import Message from "../components/Message";
import messageList from "../assets/messageList";

import { PaperAirplaneIcon } from "react-native-heroicons/solid";

export default function UpdateScreen() {
  const [message, setMessage] = useState(null);

  const sendUpdates = () => {
    console.log("Updates sent!");
  };

  return (
    <SafeAreaView style={styles.updateScreen}>
      <Header />
      <ScrollView
        contentContainerStyle={{
          marginBottom: 14,
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <View
          style={{
            justifyContent: "flex-center",
          }}
        >
          {messageList.map((item, idx) => (
            <Message item={item} key={idx} />
          ))}
        </View>
        <View style={styles.messageBox}>
          <TextInput
            multiline={true}
            // numberOfLines={5} // Set initial number of lines
            maxHight={5}
            placeholder="Type here . . ."
            value={message}
            onChangeText={(text) => setMessage(text)}
            style={styles.messageInput}
          />
          <TouchableOpacity onPress={sendUpdates} style={styles.messageBtn}>
            <PaperAirplaneIcon size={22} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
