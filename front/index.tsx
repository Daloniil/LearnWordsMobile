import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name} from './app.json';

import 'intl';
import 'intl-pluralrules';

import './src/i18n';

AppRegistry.registerComponent(name, () => App);
