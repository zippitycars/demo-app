import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import WelcomeScreen from "./screens/Welcome";
import ScheduleScreen from "./screens/Schedule";

const AppNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {headerShown: false},
  },
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: {headerShown: false},
  },
});

export default createAppContainer(AppNavigator);