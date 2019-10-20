import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Views
import Home from './views/Home';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const App = createAppContainer(MainNavigator);
export default App;
