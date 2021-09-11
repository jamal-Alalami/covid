import React, { useMemo } from "react";
import { StyleSheet, View, Text } from 'react-native';
import { dimensionsCalculation } from "../../../lib/helpers";
import Animated, { Easing } from "react-native-reanimated";
import Pogress from "../../../shared/components/Pogress";

interface Props {
  confirmed: number;
  deaths: number;
  recovered: number;
}

export default function Statistics(props: Props) {
  const data = useMemo(() => {
    const { confirmed, deaths, recovered } = props;
    const max = Math.max(confirmed, Math.max(deaths, recovered));
    return [
      {
        name: "Cases",
        total: confirmed,
        color: "#003cbf",
        progress: (confirmed / max) * 100,
      },
      {
        name: "Recovered",
        total: recovered,
        color: "#07cafd",
        progress: (recovered / max) * 100,
      },
      {
        name: "Deaths",
        total: deaths,
        color: "#ff5c4d",
        progress: (deaths / max) * 100,
      },
    ];
  }, [props]);

  return (<View style={styles.container}>
    <View style={styles.row}>
      <Text style={styles.title}>COVID - 19 Global Cases</Text>
    </View>
    <View style={{}}>
      {data.map(datum => <View style={styles.dataContainer}>
        <Text style={{ fontSize: 16, color: datum.color, }}>{datum.name} - {datum.total}</Text>
        <Pogress progress={datum.progress} total={datum.total} color={datum.color} />
      </View>
      )}
    </View>


  </View>)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: dimensionsCalculation(8),
    margin: dimensionsCalculation(16),
    padding: dimensionsCalculation(12),
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    paddingBottom: dimensionsCalculation(8),
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 24
  },
  dataContainer: { paddingVertical: dimensionsCalculation(8) }
})