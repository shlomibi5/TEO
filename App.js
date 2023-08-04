import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import LoginScreen from "./comps/screens/login";
import StartGame from "./comps/screens/startgame";
import ChooseGame from "./comps/screens/choosegame";
import LawQuiz from "./comps/screens/lawquiz";
import StoreGifts from "./comps/screens/storegifts";
import TopUsers from "./comps/screens/topusers";

const Stack = createNativeStackNavigator();
// ff
export default function App() {
  return (
   
        <NavigationContainer >
          <Stack.Navigator initialRouteName="LoginScreen">      
          
            <Stack.Screen name="התחברות ל TEO" component={LoginScreen}  />
            <Stack.Screen name="StartGame" component={StartGame} />
            <Stack.Screen name="ChooseGame" component={ChooseGame} />
            <Stack.Screen name="LawQuiz" component={LawQuiz} />
            <Stack.Screen name="StoreGifts" component={StoreGifts} /> 
            <Stack.Screen name="TopUsers" component={TopUsers} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>

  );
}

