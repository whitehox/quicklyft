import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Views
import Home from './views/Home';
import SignUp from './views/SignUp';

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    SignUp: { screen: SignUp },
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
