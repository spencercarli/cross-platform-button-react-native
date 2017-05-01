import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from './Button';

EStyleSheet.build();

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          text="Press Me"
          onPress={() => console.log('Pressed!')}
        />
      </View>
    );
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
