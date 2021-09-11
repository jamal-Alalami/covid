import React, { useCallback, useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Navigation, OptionsModalPresentationStyle } from "react-native-navigation";
import { dimensionsCalculation } from "../../lib/helpers";
import { Screens } from "../../navigation/screens";
import CountryCard from "../../shared/components/CountryCard";
import Header from "../Home/Header";
interface Props {
  countries?;
  componentId?;
}

export default function Countries(props: Props) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({});
  const [list, setList] = useState(props.countries);
  const _renderItem = ({ item, index }) => {
    return (<CountryCard country={item} />)
  }
  const _keyExtractor = useCallback((item) => item.Slug, []);

  useEffect(() => {
    const filterList = props.countries.filter(country => country.Country?.toLowerCase().indexOf(search.toLowerCase()) > -1);
    setList(filterList)
  }, [search]);
  useEffect(() => {
    if (filter?.id) {
      const sortedList = [...props.countries].sort((a, b) => filter?.sort == 'asc' ? a[filter.key] - b[filter.key] : b[filter.key] - a[filter.key])
      setList(sortedList);
    }
  }, [filter?.id])
  const _listEmptyComponent = () => {
    return (<View style={styles.searchResult}>
      <Text>No Results Found</Text>
    </View>)
  }

  const _openFilter = () => {
    Navigation.showModal({
      component: {
        name: Screens.Filters,
        passProps: {
          setFilter: setFilter
        },

        options: {
          layout: {
            backgroundColor: 'transparent',
            componentBackgroundColor: 'transparent',
          },
        }
      }
    })
  }
  const back = () => {
    Navigation.pop(props.componentId)
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header
        title={'All Countries'}
        enableSearch={true}
        onChangeText={(text) => setSearch(text)}
        search={search}
        filter={true}
        openFilter={_openFilter}
        back={back}
      />
      <FlatList
        data={list}
        renderItem={_renderItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={_keyExtractor}
        ListEmptyComponent={_listEmptyComponent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  searchResult: { padding: dimensionsCalculation(16) }
})