import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {elevation10} from '../../Constants/styles';
import {logOut} from '../../Constants/alerts';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  user: state.userLoginValues,
});
class ButtonView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    };
  }
  render() {
    return (
      <View style={styles.buttonView}>
        {this.props.user.name == '' && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navRedux.navigate('Login');
            }}>
            <Text style={styles.buttonText}>INICIA SESIÓN/REGÍSTRATE</Text>
          </TouchableOpacity>
        )}
        {this.props.user.name != '' && (
          <TouchableOpacity
            style={styles.close}
            onPress={() => {
              logOut();
            }}>
            <Text style={styles.buttonText}>CERRAR SESIÓN</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
export default connect(mapStateToProps)(ButtonView);
const styles = StyleSheet.create({
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#8FC177',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  close: {
    backgroundColor: '#56aab4',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    ...elevation10,
  },
});
