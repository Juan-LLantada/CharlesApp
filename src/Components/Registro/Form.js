/* @flow */

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {register} from '../../Constants/validations';
import {regFields} from '../../Constants/inputfields';
import {elevation5} from '../../Constants/styles';
import {Bios} from '../../Constants/Icons/logos';
import {registrar} from '../../Assets/Functions/register';
import {Input, Footer} from './index';
import {RightArrow} from '../../Constants/Icons/design';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Bios width={150} height={150} />
        <Formik
          initialValues={this.state}
          onSubmit={formikValues => {
            registrar(formikValues, this.props.navigation);
          }}
          validationSchema={register}>
          {formikProps => (
            <React.Fragment>
              {regFields.map((text, index) => (
                <Input formikProps={formikProps} key={index} field={text} />
              ))}
              <TouchableOpacity
                onPress={formikProps.handleSubmit}
                style={styles.button}>
                <Text style={styles.btnText}>Registrarme</Text>
                <RightArrow />
              </TouchableOpacity>
            </React.Fragment>
          )}
        </Formik>
        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

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
export default Form;
