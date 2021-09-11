import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { dimensionsCalculation } from "../../../lib/helpers";
interface Props {
  title: string;
  enableSearch: boolean;
  search?;
  onChangeText?;
  filter?;
  openFilter?;
  back?;
}

export default function Header(props: Props) {

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {props?.back ? <TouchableOpacity
          onPress={props.back}
          style={{ marginRight: dimensionsCalculation(8) }}>
          <Image source={require('../../../assets/icons/arrow-left.png')} style={{ width: 32, height: 32 }} />
        </TouchableOpacity>
          : null}
        <Text style={styles.title}>
          {props.title}
        </Text>
      </View>
      {props.enableSearch ? <View style={styles.search}>
        <TextInput
          style={styles.input}
          value={props.search}
          onChangeText={props.onChangeText}
        />
        {props.filter ? <TouchableOpacity
          onPress={props.openFilter}
          style={{ marginLeft: dimensionsCalculation(8) }}>
          <Image source={require('../../../assets/icons/filter-variant.png')} style={{ width: 32, height: 32 }} />
        </TouchableOpacity> : null}
      </View> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: dimensionsCalculation(22),
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
  },
  search: {
    flexDirection: 'row',
    height: dimensionsCalculation(32),
    marginTop: dimensionsCalculation(6),
  },
  input: {
    flex: 1, paddingHorizontal: dimensionsCalculation(4), backgroundColor: '#c1c1c1',
    borderRadius: dimensionsCalculation(6)
  }
});
