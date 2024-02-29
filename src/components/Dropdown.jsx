import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { themeColors } from "../theme/theme";
import { s } from "react-native-wind";
import * as Icon from "react-native-heroicons/solid";

export default function Dropdown({
  title,
  selectedItem,
  setSelectedItem,
  showDropDownMenu,
  setShowDropDownMenu,
  dropdownList,
}) {
  return (
    <View>
      <View style={{ gap: 10 }}>
        <View>
          <Text
            style={{
              ...s`px-2 font-semibold text-xl`,
              color: themeColors.bgColor(1),
            }}
          >
            {title}
          </Text>
        </View>
        <TouchableWithoutFeedback
          onPress={() => setShowDropDownMenu(!showDropDownMenu)}
        >
          <View
            style={{
              ...s`px-3 py-2 h-12 flex-row justify-between items-center border rounded-3xl `,
              borderColor: themeColors.bgColor(0.4),
            }}
          >
            <Text style={{ ...s`flex-1 text-base` }}>{selectedItem}</Text>
            <Icon.ChevronDownIcon color={themeColors.bgColor(1)} size={24} />
          </View>
        </TouchableWithoutFeedback>

        {showDropDownMenu ? (
          <View
            style={{
              ...s`my-2 border rounded-lg`,
              borderColor: themeColors.bgColor(0.4),
              display: showDropDownMenu ? "flex" : "none",
            }}
          >
            {dropdownList.map((item, index) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => {
                  setSelectedItem(item);
                  setShowDropDownMenu(!showDropDownMenu);
                }}
              >
                <View
                  style={{
                    ...s`mx-2 mb-3 p-2 h-10 flex-row justify-between items-center border-b rounded-lg `,
                    borderColor: themeColors.bgColor(0.3),
                  }}
                >
                  <Text>{item}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        ) : null}
      </View>
    </View>
  );
}
