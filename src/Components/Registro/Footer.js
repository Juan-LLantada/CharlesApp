import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {elevation10, width} from '../../Constants/styles';
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goLogin() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={[styles.header]}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.goLogin();
          }}>
          <Text style={styles.btntxt}>¿Ya tienes cuenta? Inicia sesión!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: width - 40,
    alignSelf: 'center',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    ...elevation10,
  },

  btntxt: {fontStyle: 'italic', color: 'black'},
  btn: {margin: 30},
});
