/* @flow */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import {product} from '../../Constants/validations';
import {inputFields} from '../../Constants/inputfields';
import {elevation10} from '../../Constants/styles';
import {Presentaciones, FechaEntrega, CompañiaEntrega} from './index';
import {Alert} from '../../Constants/Icons/design';
import moment from 'moment/min/moment-with-locales';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: 'Paquetería TRESGUERRAS',
      presentation: '1 Litro',
      date: moment().format('YYYY-MM-DD'),
    };
  }

  sendForm(values) {
    console.log(values);

    var datos = {
      data: [],
    };
    datos.data.push({
      name: values.name,
      productName: values.productName,
      address: values.address,
      emailTransfer: values.emailTransfer,
      compañia: this.state.company,
      presentacion: this.state.presentation,
      fecha: this.state.date,
    });
    console.log(datos.data);
    this.props.function(datos.data);
  }

  setDate(date) {
    this.setState({
      date: date,
    });
  }

  setCompany(company) {
    this.setState({
      company: company,
    });
  }

  setPresentation(value) {
    this.setState({
      presentation: value,
    });
  }

  render() {
    var formikValues = {
      name: '',
      productName: '',
      address: '',
      emailTransfer: '',
    };
    return (
      <View style={[styles.dataPart, elevation10]}>
        <Formik
          initialValues={formikValues}
          onSubmit={formikValues => {
            this.sendForm(formikValues);
          }}
          validationSchema={product}>
          {formikProps => (
            <React.Fragment>
              {inputFields.map((text, index) => (
                <View key={index} style={styles.inputField}>
                  <View style={styles.label}>
                    <Text style={{letterSpacing: 2}}>{text.placeholder}</Text>
                  </View>
                  <TextInput
                    style={[styles.input2]}
                    placeholder={text.placeholder}
                    placeHolderTextColor="black"
                    onChangeText={formikProps.handleChange(text.key)}
                    onBlur={formikProps.handleBlur(text.key)}
                    autoCapitalize={
                      text.key == 'emailTransfer' ? 'none' : 'sentences'
                    }
                    returnKeyType="done"
                  />
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
                <Presentaciones function={this.setPresentation.bind(this)} />
                <CompañiaEntrega function={this.setCompany.bind(this)} />
                <FechaEntrega function={this.setDate.bind(this)} />
                <TouchableOpacity
                  onPress={formikProps.handleSubmit}
                  style={styles.btn}>
                  <Text style={styles.btnTxt}>Envía tu pedido!</Text>
                </TouchableOpacity>
              </View>
            </React.Fragment>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: 'auto',
    alignItems: 'flex-end',
    padding: 50,
  },
  input2: {
    //borderRadius: 10,
    height: 40,
    backgroundColor: '#F8F8F8',
    paddingLeft: 10,
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    backgroundColor: 'transparent',
  },
  dataPart: {
    backgroundColor: 'transparent',
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
    paddingBottom: 30,
  },
  data: {
    flex: 1,
    margin: 20,
    fontSize: 15,
    paddingVertical: 20,
    textAlign: 'center',
  },
  container2: {
    flex: 1,
  },
  alert: {
    color: 'red',
    fontSize: 10,
    letterSpacing: 0.5,
    textAlign: 'right',
  },
  picker: {
    padding: 10,
  },
  label: {
    flex: 1,
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D8D3D3',
    marginBottom: 10,
    alignItems: 'center',
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
});
export default Register;
