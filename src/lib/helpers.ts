import React from 'react';
import { Dimensions, } from 'react-native';
const { width } = Dimensions.get('window');

export const dimensionsCalculation = (IPhonePixel: Number) => {
  return width * IPhonePixel / 375;
}
