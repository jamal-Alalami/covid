import { Navigation } from 'react-native-navigation';
import { Screens } from './screens';

function startApp() {
  setDefaultOptions();
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: Screens.Home,
            },
          },
        ],
      },
    },
  });
}

const setDefaultOptions = () => {
  return Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: true,
    },
    statusBar: {
      style: "light",
    },
    layout: {
      orientation: ['portrait'],
      direction: 'ltr',
    },
  });

};
export { startApp };
