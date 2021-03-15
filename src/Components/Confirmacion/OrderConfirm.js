/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {elevation10} from '../../Constants/styles';

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.dataPart]}>
        {this.props.data.map((text, index) => (
          <View key={index} style={styles.inputField}>
            <View style={styles.label}>
              <Text style={{letterSpacing: 2}}>{text.titulo}</Text>
            </View>
            <View style={[styles.input2]}>
              <Text>{text.value}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input2: {
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#F8F8F8',
    paddingLeft: 10,
    width: '100%',
  },
  dataPart: {
    backgroundColor: 'transparent',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    ...elevation10,
  },
  label: {
    flex: 1,
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D8D3D3',
    marginBottom: 10,
    alignItems: 'center',
  },
  inputField: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Register;
