import React, { useCallback } from "react";
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Navigation } from "react-native-navigation";
import { dimensionsCalculation } from "../../../lib/helpers";
import { Screens } from "../../../navigation/screens";
import CountryCard from "../../../shared/components/CountryCard";
interface Props {
  list?;
  countries?;
  componentId?;
}

export default function TopFiveCountries(props: Props) {
  const _renderItem = ({ item, index }) => {
    return (<CountryCard country={item} key={item.Slug} />)
  }
  const showAllCountries = () => {
    Navigation.push(props.componentId, {
      component: {
        name: Screens.Countries,
        passProps: {
          countries: props.countries
        }
      }
    })
  }

  return (<View>
    <View style={styles.row}>
      <Text style={styles.title}>{'Top Five Countries'}</Text>
    </View>
    {props.list.map((item, index) => _renderItem({ item, index }))}
    <View style={styles.footer}>
      <TouchableOpacity onPress={showAllCountries} >
        <Text>See More</Text>
      </TouchableOpacity>
    </View>
  </View>)
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: dimensionsCalculation(16),
    paddingVertical: dimensionsCalculation(12)
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  footer: { justifyContent: 'center', alignItems: 'center', padding: dimensionsCalculation(16) }
})