import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TransactionsProvider } from './src/contexts/TransactionsContext';
import RootNavigator from './src/navigation/RootNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <TransactionsProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TransactionsProvider>
  );
}