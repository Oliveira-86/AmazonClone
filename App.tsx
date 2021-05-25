import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import ProductDetails from './src/screens/ProductDetails';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ProductDetails />
    </SafeAreaView>
  );
};
