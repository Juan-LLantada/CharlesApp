import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconosVentas} from './index';

export default class VentasEBIOS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.biosLogo}>
          <Text style={styles.title1}>Proceso de venta de productos</Text>
          <Text style={[styles.title1, styles.title2]}>Epsilon Bios</Text>
        </View>
        <IconosVentas />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    paddingHorizontal: 5,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  title2: {
    color: '#89D00B',
  },

  biosLogo: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    borderColor: '#C2C2C2',
  },
});
