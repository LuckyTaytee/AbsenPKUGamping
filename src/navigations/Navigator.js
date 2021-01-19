import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import History from '../screens/History';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons';

const stackNavigatorOptions = {
    headerShown : false
}

const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    Home:{screen:Home},
    History:{screen:History}
},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);

const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                 tabBarIcon: ({tintColor}) => <Ionicons name='ios-home' size={24} color={tintColor} />
            }
        }
    }
  )

export default createAppContainer(AppNavigator);
