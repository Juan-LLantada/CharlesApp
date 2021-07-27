import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';
import {RightArrow} from '../../Constants/Icons/design';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Divider style={styles.divider} />
        <Text style={styles.regis}>No tienes cuenta? Regístrate!</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Registro');
          }}
          style={styles.button}>
          <Text style={styles.btnText}>REGISTRARME</Text>
          <RightArrow />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  regis: {
    color: 'grey',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  divider: {backgroundColor: 'grey', width: '100%', marginVertical: 20},
  button: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(117,166,84)',
    justifyContent: 'space-between',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
    margin: 20,
  },
  btnText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
