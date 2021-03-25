import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-elements';
import {RightArrow} from '../../Constants/Icons/design';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.centerView}>
        <View style={[styles.innerCenter]}>
          <Text style={styles.regis}>No tienes cuenta? Regístrate!</Text>
          <Divider style={{backgroundColor: 'lightgrey', width: '80%'}} />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Registro');
            }}
            style={[styles.button]}>
            <Text style={styles.btnText}>Registrarme</Text>
            <RightArrow />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerCenter: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    padding: 10,
  },
  regis: {
    color: 'black',
    fontSize: 15,
    fontStyle: 'italic',
    margin: 20,
  },
  centerView: {
    marginVertical: 20,
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  button: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(60,154,175,1)',
    justifyContent: 'space-between',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 20,
    margin: 20,
  },
  bg: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
