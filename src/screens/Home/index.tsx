import React, { useState } from 'react';
import { RefreshControl, ScrollView, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { useQuery } from 'react-query';
import { covidApi } from '../../lib/api/covidApi';
import Header from './Header';
import Statistics from './Statistics';
import TopFiveCountries from './TopFiveCountries';


function Home(props) {
  const { error, data, isFetching, refetch, isLoading } = useQuery(
    covidApi.get.key,
    covidApi.get.exec,
    {
      select: (data: any) => {
        let countries = data.Countries;
        const topFive = countries.sort((a, b) =>
          b.TotalConfirmed - a.TotalConfirmed,
        ).slice(0, 5);

        return {
          confirmed: data.Global.TotalConfirmed,
          deaths: data.Global.TotalDeaths,
          recovered: data.Global.TotalRecovered,
          countries,
          topFive: topFive,
        };
      },
    },
  );

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <ScrollView
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            refreshing={isFetching || isLoading}
          />
        }
      >
        <Header title={'Covid-19'} />
        {isLoading || isFetching ? null :
          <>
            <Statistics confirmed={data.confirmed} deaths={data.deaths} recovered={data.recovered} />
            <TopFiveCountries countries={data.countries} list={data.topFive} componentId={props.componentId} />
          </>
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Home;
