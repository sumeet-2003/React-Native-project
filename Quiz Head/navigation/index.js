import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import Home from '../screens/home';
import About from '../screens/about';
import Inst from '../screens/Instruction';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>
      <Stack.Screen name="About" component={About} options={{headerShown:false}}/>
      <Stack.Screen name="Inst" component={Inst} options={{headerShown:false}}/>

    </Stack.Navigator>
  );
}
export default MyStack