import React from "react";

import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { dimensionsCalculation } from "../../../lib/helpers";
import moment from 'moment'
import Cases from "./Cases";
interface Props {
  country?;
}
export default function CountryCard(props: Props) {
  const { Country,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
    Date,
  } = props.country
  return (
    <View style={{ width: Dimensions.get('window').width, }}>
      <View style={styles.container}>
        <View >
          <Text style={styles.title}>{Country}<Text style={styles.subTitle}>- {moment(Date).format('DD-MM-YYYY')}</Text></Text>
        </View>
        <View style={styles.row}>

          <Cases
            title={'Confirmed'}
            total={TotalConfirmed}
            color={"#003cbf"}
          />
          <Cases
            title={'Recovered'}
            total={TotalRecovered}
            color={"#07cafd"}
          />
          <Cases
            title={'Deaths'}
            total={TotalDeaths}
            color={"#ff5c4d"}
          />
        </View>
      </View>
    </View >)
}

const styles = StyleSheet.create({
  container: {

    margin: dimensionsCalculation(16),
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    elevation: 2,
    borderRadius: dimensionsCalculation(6),
    padding: dimensionsCalculation(16),
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  subTitle: { fontSize: 12, color: '#ccc', fontWeight: 'normal' },
  row: { width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingTop: dimensionsCalculation(8) }
})