import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Input} from './index';
import {RightArrow} from '../../Constants/Icons/design';
import {userLogin} from '../../Actions/userValues';
import {connect} from 'react-redux';
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
          style={styles.input}
        />
        <Input
          placeholder="Contraseña"
          change={this.setText.bind(this)}
          secure={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.dispatch(
              userLogin(
                this.state.email,
                this.state.password,
                this.props.navRedux,
              ),
            );
          }}>
          <Text style={styles.btnText}>INICIA SESIÓN</Text>
          <RightArrow />
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
    justifyContent: 'center',
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
    margin: 20,
  },
  btnText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
