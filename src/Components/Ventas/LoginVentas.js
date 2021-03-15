import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {ChronosIcon} from '../../Constants/Icons/logos';
import {Login} from '../../Constants/Icons/design';
import {users} from '../../Constants/data';
import {loginInput} from '../../Constants/inputfields';
import {Input} from 'react-native-elements';
import {storeData} from '../../Constants/asyncStorage';

export default class LoginVentas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      login: false,
    };
  }

  _storeData = async () => {
    let login = true;
    try {
      await storeData(login, '@MySuperStore:key');
      this.props.function();
    } catch (error) {
      // Error saving data
    }
  };

  validation() {
    users.forEach(element => {
      if (
        this.state.user == element.user &&
        this.state.password == element.password
      ) {
        console.log('entraste');
        this._storeData();
      }
    });
  }

  stateSet(key, text) {
    key == 'user'
      ? this.setState({
          user: text,
        })
      : this.setState({
          password: text,
        });
  }

  render() {
    var key = 0;
    return (
      <View style={styles.centerView}>
        <ChronosIcon style={styles.logo} />
        <View style={styles.logView}>
          {loginInput.map(input => (
            <Input
              key={key++}
              rightIcon={input.Icon}
              autoCapitalize={'none'}
              containerStyle={styles.input}
              inputContainerStyle={styles.inputContainerStyle}
              rightIconContainerStyle={styles.rightIconContainerStyle}
              onChangeText={text => this.stateSet(input.type, text)}
              placeholder={input.placeholder}
              secureTextEntry={input.type == 'user' ? false : true}
            />
          ))}
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this._storeData()}>
            <Text style={styles.btnText}>Inicia sesión</Text>
            <Login style={{color: '#2A691A'}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginBtn: {
    width: 200,
    height: 'auto',
    ...Platform.select({
      ios: {
        shadowRadius: 10,
        shadowColor: 'white',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
    //backgroundColor: '#2A691A',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    shadowRadius: 15,
    shadowColor: '#A0AEB1',
    flexDirection: 'row',
    padding: 20,
    margin: 20,
  },
  input: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
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
  centerView: {
    margin: 20,
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    height: 'auto',
    borderRadius: 10,
    alignItems: 'center',
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
  logView: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  rightIconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {width: 200, height: 200},
  btnText: {color: '#ffffff', fontSize: 20},
});
