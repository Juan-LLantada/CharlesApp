/* @flow */

import React, {Component, PropTypes} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {register} from '../../Constants/validations';
import {regFields} from '../../Constants/inputfields';
import {elevation10} from '../../Constants/styles';
import {Alert} from '../../Constants/Icons/design';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {Item, Input as InputComponent} from 'native-base';
import {Logo} from '../../Components/Login';
import {registrar} from '../../Assets/Functions/register';
import {Footer} from '../../Components/Registro/index';
import {RightArrow} from '../../Constants/Icons/design';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      email: '',
    };
  }
  render() {
    const formikValues = {
      name: '',
      email: '',
      password: '',
    };
    return (
      <View style={{flex: 1, backgroundColor: '#f8f6f7'}}>
        <ImageBackground source={Bg} style={styles.container}>
          <ScrollView style={{flex: 1}}>
            <View style={[styles.dataPart, elevation10]}>
              <Logo />
              <Formik
                initialValues={formikValues}
                onSubmit={formikValues => {
                  registrar(formikValues, this.props.navigation);
                }}
                validationSchema={register}>
                {formikProps => (
                  <React.Fragment>
                    {regFields.map((text, index) => (
                      <View key={index} style={styles.inputField}>
                        <Text style={{color: 'white', padding: 5}}>
                          {index + 1}
                        </Text>
                        <Item rounded style={styles.inputItem}>
                          <InputComponent
                            secureTextEntry={text.secure}
                            placeholder={text.placeholder}
                            placeHolderTextColor="black"
                            onChangeText={formikProps.handleChange(text.key)}
                            onBlur={formikProps.handleBlur(text.key)}
                            autoCapitalize={text.cap}
                            returnKeyType="done"
                            style={{color: 'black'}}
                          />
                        </Item>
                        {formikProps.touched[text.key] &&
                          formikProps.values[text.key] == '' && (
                            <View style={styles.alertV}>
                              <Text style={styles.alert}>
                                {formikProps.touched[text.key] &&
                                  formikProps.errors[text.key]}
                              </Text>
                              <Alert />
                            </View>
                          )}
                      </View>
                    ))}
                    <View style={styles.btnRegV}>
                      <TouchableOpacity
                        onPress={formikProps.handleSubmit}
                        style={styles.button}>
                        <Text style={styles.btnText}>Registrarme</Text>
                        <RightArrow />
                      </TouchableOpacity>
                    </View>
                  </React.Fragment>
                )}
              </Formik>
            </View>
            <Footer navigation={this.props.navigation} />
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputItem: {
    borderColor: '#ACACAC',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  titleView: {
    backgroundColor: '#5f7149',
    height: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.2,
      },
      android: {
        elevation10: 5,
      },
    }),
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    backgroundColor: 'transparent',
  },
  dataPart: {
    margin: 20,
    padding: 10,
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  btnRegV: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingTop: 5,
  },
  btn: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
    marginVertical: 10,
  },
  btn2: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  btnTxt2: {
    color: '#000000',
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 10,
    height: 'auto',
  },
  alert: {
    color: 'red',
    fontSize: 10,
    letterSpacing: 0.5,
    textAlign: 'right',
  },
  inputField: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertV: {
    padding: 10,
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
export default Register;
