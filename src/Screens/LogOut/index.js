import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {RightArrow} from '../../Constants/Icons/design';
import {width, height} from '../../Constants/styles';
import {_signOutAsync} from '../../Constants/asyncStorage';
export default class LogOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    };
  }
  logOut() {
    Alert.alert('Cerrará sesión', 'Desea continuar?', [
      {
        text: 'Continuar',
        onPress: _signOutAsync(),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          this.logOut();
        }}>
        <Text style={styles.textButton}>CERRAR SESIÓN</Text>
        <RightArrow />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {color: 'black', fontSize: 15, textAlign: 'justify', padding: 10},
  title: {color: 'black', fontWeight: 'bold'},
  bg: {
    width: width,
    height: height,
  },
  title1: {
    paddingHorizontal: 5,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  title2: {
    color: '#89D00B',
  },
  button: {
    width: width - 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'black',
    padding: 10,
    paddingVertical: 20,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biosLogo: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
    width: width - 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    borderColor: '#C2C2C2',
  },
  textButton: {
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
