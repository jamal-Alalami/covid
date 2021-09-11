import React from 'react';
import { Navigation } from 'react-native-navigation';
import Home from '../screens/Home';
import Countries from '../screens/Countries';
import Filters from '../screens/Filters';
import ScreenWrapper from '../shared/hoc/ScreenWrapper';


export enum Screens {
  Home = 'Home',
  Countries = 'Countries',
  Filters = 'Filters',

}

const registerScreen = (name: string, component: React.FC<any>) => {
  Navigation.registerComponent(
    name,
    () => props => ScreenWrapper(props, component),
    () => component,
  );
};

registerScreen(Screens.Home, Home);
registerScreen(Screens.Countries, Countries);
registerScreen(Screens.Filters, Filters);
