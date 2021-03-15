import React, {Component} from 'react';
import {StyleSheet, Alert, View} from 'react-native';
import {Button, Input} from './index';
import {postLogin} from '../../Assets/Functions/login';

export default class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  setText(value, type) {
    type == 'Usuario'
      ? this.setState({
          email: value,
        })
      : this.setState({
          password: value,
        });
  }
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Usuario"
          change={this.setText.bind(this)}
          secure={false}
        />
        <Input
          placeholder="Contraseña"
          change={this.setText.bind(this)}
          secure={true}
        />
        <Button
          text={'Inicia sesión'}
          email={this.state.email}
          password={this.state.password}
          navigation={this.props.navigation}
          press={postLogin}
          type={'login'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
