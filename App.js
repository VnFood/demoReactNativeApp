import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDcIWlzGGHjbuHWbu25JzTGhSz-yJjAezY",
  authDomain: "bracelots-d2443.firebaseapp.com",
  databaseURL: "https://bracelots-d2443.firebaseio.com",
  projectId: "bracelots-d2443",
  storageBucket: "bracelots-d2443.appspot.com",
  messagingSenderId: "180412690968",
  appId: "1:180412690968:web:7f683fcffcdeeca9ab496d",
  measurementId: "G-78V9DM11TB",
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)
