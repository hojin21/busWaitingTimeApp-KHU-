import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import propTypes from "prop-types";
import BusWatinginfo from "./BusWatinginfo";

const busOptions = {
  "234000016": {
    busName: "1112"
  },
  "200000112": {
    busName: "7000"
  },
  "200000115": {
    busName: "5100"
  },
  "200000103": {
    busName: "9"
  }
};

export default function Bus({ info }) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}></View>
      <View style={styles.container2}>
        <FlatList
          data={info}
          renderItem={({ item }) => {
            return (
              <BusWatinginfo
                busName={busOptions[item.routeId[0]].busName}
                predictTime1={item.predictTime1[0]}
                locationNo1={item.locationNo1[0]}
                predictTime2={item.predictTime2[0]}
                locationNo2={item.locationNo2[0]}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

Bus.propTypes = {
  busName: propTypes.oneOf(["234000016", "200000112", "200000115", "200000103"])
  // .isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container1: {
    flex: 3
  },
  container2: {
    flex: 7
  }
});
