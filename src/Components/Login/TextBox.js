import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Input} from './index';
import {RightArrow} from '../../Constants/Icons/design';
import {userLogin} from '../../Actions/userValues';
import {connect} from 'react-redux';
import {loginInput} from '../../Constants/inputfields';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  setText(value, type) {
    type == 'user'
      ? this.setState({
          email: value,
        })
      : this.setState({
          password: value,
        });
  }
  login() {
    this.props.dispatch(
      userLogin(this.state.email, this.state.password, this.props.navRedux),
    );
  }
  render() {
    return (
      <View style={styles.container}>
        {loginInput.map((item, index) => (
          <Input item={item} key={index} change={this.setText.bind(this)} />
        ))}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.login();
          }}>
          <Text style={styles.btnText}>INICIA SESIÓN</Text>
          <RightArrow />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.passwordButton}
          onPress={() => {
            this.props.navRedux.navigate('PasswordChange');
          }}>
          <Text style={styles.passwordText}>Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(mapStateToProps)(TextBox);
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    padding: 10,
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
    marginTop: 20,
  },
  btnText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
  passwordText: {
    fontSize: 15,
  },
  passwordButton: {
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
});
