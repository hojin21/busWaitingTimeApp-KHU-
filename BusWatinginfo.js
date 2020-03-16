import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Bus extends Component {
  static defaultProps = {
    busName: "",
    buttonColor: "#",
    titleColor: "#",

    predictTime1: "",
    locationNo1: "",
    predictTime2: "",
    locationNo2: ""
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.busName}번</Text>
        <Text>
          도착예정: {this.props.predictTime1}분({this.props.locationNo1}
          정류장), {this.props.predictTime2}분({this.props.locationNo2}
          정류장)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  }
});
