import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { dimensionsCalculation } from "../../lib/helpers";
import Card from "./Card";
const filter = [
  { id: 1, name: 'TotalConfirmed - ASC', sort: 'asc', key: 'TotalConfirmed' },
  { id: 2, name: 'TotalConfirmed - DESC', sort: 'desc', key: 'TotalConfirmed' },
  { id: 3, name: 'TotalRecovered - ASC', sort: 'asc', key: 'TotalRecovered' },
  { id: 4, name: 'TotalRecovered - DESC', sort: 'desc', key: 'TotalRecovered' },
  { id: 5, name: 'TotalDeaths - ASC', sort: 'asc', key: 'TotalDeaths' },
  { id: 6, name: 'TotalDeaths - DESC', sort: 'desc', key: 'TotalDeaths' },

]
export default function Filters(props) {
  const _card = ({ item, index }) => <Card item={item} onPress={onPress} />
  const onPress = (item) => {
    props.setFilter(item);
    Navigation.dismissModal(props.componentId)
  }
  const header = () => {
    return (<View style={styles.header}>
      <Text style={styles.headerTitle}>Choose Filter</Text>
    </View>)
  }
  const _keyExtractor = (item, index) => item.id;
  const _footer = () => <View style={{ height: 80 }}></View>
  return (
    <View style={styles.constainer}>

      <View style={styles.secondContainer}>
        <FlatList
          ListHeaderComponent={header}
          data={filter}
          renderItem={_card}
          keyExtractor={_keyExtractor}
          ListFooterComponent={_footer}
        />
      </View>
    </View>)
}

const styles = StyleSheet.create({
  constainer: { flex: 1, justifyContent: 'flex-end' },
  secondContainer: { backgroundColor: '#fff', borderTopLeftRadius: dimensionsCalculation(20), borderTopRightRadius: dimensionsCalculation(20) },
  header: { padding: dimensionsCalculation(8), justifyContent: 'center', alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: 'bold' }
})