/**
 * @format
 */
import 'react-native-gesture-handler';

import {Navigation} from 'react-native-navigation';
import App from './App';
import NewView from './NewView';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

Navigation.registerComponent('navigation.playground.WelcomeScreen', () =>
  gestureHandlerRootHOC(App),
);
Navigation.registerComponent('navigation.playground.NewView', () =>
  gestureHandlerRootHOC(NewView),
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.playground.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
