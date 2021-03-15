import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, ImageBackground} from 'react-native';
import {Button} from './index';
import {Divider} from 'react-native-elements';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.centerView}>
        <View style={[styles.innerCenter]}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontStyle: 'italic',
              margin: 20,
            }}>
            No tienes cuenta? Regístrate!
          </Text>
          <Divider style={{backgroundColor: 'lightgrey', width: '80%'}} />
          <Button
            text={'Regístrate'}
            press={() => {
              this.props.navigation.navigate('Registro');
            }}
          />
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
});
