import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../styledButton";
import styles from "./style";

function CarItem({ name, tagline, taglineCTA, image }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={{ uri: image }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTaglineTitle}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content="Custom order"
          onPress={() => console.log("Custom Inventory Pressed")}
        />
        <StyledButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => console.log("Existing Inventory Pressed")}
        />
      </View>
    </View>
  );
}

export default CarItem;
