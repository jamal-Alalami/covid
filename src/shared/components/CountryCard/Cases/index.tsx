import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { dimensionsCalculation } from "../../../../lib/helpers";
interface Props {
  title?;
  total?;
  color?;
}
export default function Cases(props: Props) {
  return (<View style={styles.constiner}>
    <Text style={[styles.title, { color: props.color }]}>{props.title}</Text>
    <Text style={styles.total}>{props.total}</Text>
  </View>)
}

const styles = StyleSheet.create({
  constiner: { flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingVertical: dimensionsCalculation(12), height: dimensionsCalculation(60) },
  title: { fontSize: 16, fontWeight: 'bold' },
  total: { fontSize: 14 }
})