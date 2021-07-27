import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
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
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          this.goLogin();
        }}>
        <Text style={styles.btntxt}>¿Ya tienes cuenta?</Text>
        <Text style={styles.btntxt2}>Inicia sesión!</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  btntxt: {fontStyle: 'italic', color: 'black'},
  btntxt2: {
    fontStyle: 'italic',
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
});
