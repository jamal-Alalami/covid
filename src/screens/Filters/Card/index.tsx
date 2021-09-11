import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { dimensionsCalculation } from "../../../lib/helpers";

interface Props {
  item?;
  onPress?;
}
export default function Card(props) {
  return (<TouchableOpacity
    onPress={() => props.onPress(props.item)}
    style={styles.container}>
    <Text style={{ fontSize: 16 }}>{props.item?.name}</Text>
  </TouchableOpacity>)
}
const styles = StyleSheet.create({
  container: { borderBottomWidth: 0.3, borderBottomColor: '#ccc', padding: dimensionsCalculation(12) }
})