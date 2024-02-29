import { View, Image, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "../styles/headerStyle";

import photo from "../assets/bharat.jpeg";
import { EllipsisVerticalIcon } from "react-native-heroicons/solid";
import { themeColors } from "../theme/theme";
import AdminMenu from "./AdminMenu";

export default function Header({ data, open, setOpen }) {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.header}>
        <View style={styles.profilePhoto}>
          <Image source={photo} style={styles.photo} />
        </View>
        <TouchableOpacity
          onPress={() => setOpen(!open)}
          style={styles.menuIcon}
        >
          <EllipsisVerticalIcon
            size={40}
            color={themeColors.bgColor(1)}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {open && (
        <AdminMenu
          open={open}
          setOpen={setOpen}
          data={data}
          style={styles.menu}
        />
      )}
    </View>
  );
}
