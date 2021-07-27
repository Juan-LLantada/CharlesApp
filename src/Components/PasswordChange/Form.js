/* @flow */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {passwordR} from '../../Constants/validations';
import {passwordRecovery} from '../../Constants/inputfields';
import {elevation5} from '../../Constants/styles';
import {POST} from '../../Constants/fetchFunctions';
import {Bios} from '../../Constants/Icons/logos';
import {
  failedOp,
  passChangeSucces,
  noExistingEmail,
} from '../../Constants/alerts';
import {Input} from './index';
import {RightArrow} from '../../Constants/Icons/design';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
      passwordConfirm: '',
    };
  }
  changePassword = async values => {
    try {
      let response = await POST(values, 'Correos/Recuperar');
      if (response[0] == 200) {
        if (typeof response[1].Mensaje == 'string') {
          passChangeSucces(this.props.navRedux);
        } else {
          noExistingEmail();
        }
      } else {
        failedOp();
      }
    } catch (error) {}
  };
  render() {
    return (
      <View style={styles.container}>
        <Bios width={150} height={150} />
        <Formik
          initialValues={this.state}
          onSubmit={formikValues => {
            this.changePassword(formikValues);
          }}
          validationSchema={passwordR}>
          {formikProps => (
            <React.Fragment>
              {passwordRecovery.map((text, index) => (
                <Input formikProps={formikProps} key={index} field={text} />
              ))}
              <TouchableOpacity
                onPress={formikProps.handleSubmit}
                style={styles.button}>
                <Text style={styles.btnText}>Cambiar Contraseña</Text>
                <RightArrow />
              </TouchableOpacity>
            </React.Fragment>
          )}
        </Formik>
        <TouchableOpacity
          onPress={() => {
            this.props.navRedux.navigate('Login');
          }}
          style={{...styles.button, backgroundColor: '#E52222'}}>
          <Text style={styles.btnText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(mapStateToProps)(Form);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    ...elevation5,
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
