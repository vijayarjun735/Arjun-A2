import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { transaction } = route.params;
  return (
    <View style={styles.container}>
      <Text>Date: {transaction.date}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Text>Description: {transaction.description}</Text>
      <Text>Location: {transaction.location}</Text>
      <Text>Type: {transaction.type}</Text>
      <Text>Category: {transaction.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
