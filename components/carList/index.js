import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import CarItem from "../carItem";
import cars from "./cars";
import styles from "./styles";

function CarsList(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <CarItem
            name={item.name}
            image={item.image}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
          />
        )}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
}

export default CarsList;
