import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./style";

function StyledButton({ type, content, onPress }) {
  const backgroundColor = type === "primary" ? "#171A20cc" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default StyledButton;
