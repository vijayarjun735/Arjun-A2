import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AddTransactionScreen from '../screens/AddTransactionScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={({ navigation }) => ({
          title: 'Dashboard',
          headerRight: () => (
            <Button title="Logout" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] })} />
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Transaction Details' }}
      />
      <Stack.Screen
        name="AddTransaction"
        component={AddTransactionScreen}
        options={{ title: 'Add Transaction' }}
      />
    </Stack.Navigator>
  );
}
