import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { dimensionsCalculation } from "../../../lib/helpers";
interface Props {
  progress: number;
  color: string;
  total: number;
}
export default function Pogress(props: Props) {

  return (<View style={styles.container}>
    <View
      style={{
        height: dimensionsCalculation(32), width: '100%',
        borderRadius: dimensionsCalculation(6)
      }}>
      <View style={{ borderRadius: dimensionsCalculation(6), height: '100%', width: `${props.progress}%`, backgroundColor: props.color }}></View>
    </View>
  </View>)
}

const styles = StyleSheet.create({
  container: { margin: dimensionsCalculation(4) }
})