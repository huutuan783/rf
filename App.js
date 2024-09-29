import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen_01 from './screens/Screen_01';
import Screen_02 from './screens/Screen_02';
import Screen_03 from './screens/Screen_03';
import Screen_04 from './screens/Screen_04';
import { AccountProvider } from './ContextAPI/AccountContext';

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <AccountProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Screen_01"
            component={Screen_01}
            options={{
              title: '', 
            }}
          />
          <Stack.Screen
            name="Screen_02"
            component={Screen_02}
            options={{
              title: '',  
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="Screen_03"
            component={Screen_03}
            options={{
              title: '',  
              headerTintColor: '#000',
            }}
          />
          <Stack.Screen
            name="Screen_04"
            component={Screen_04}
            options={{
              title: 'Product name',  
              headerTintColor: '#000',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AccountProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
