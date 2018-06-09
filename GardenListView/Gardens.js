import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

export default class GardenListView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>here is some text bruh.</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });