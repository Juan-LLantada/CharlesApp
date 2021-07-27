/* @flow */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {product} from '../../Constants/validations';
import {inputFields} from '../../Constants/inputfields';
import {elevation10} from '../../Constants/styles';
import {Presentaciones, FechaEntrega, CompañiaEntrega, Input} from './index';
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
      <View style={styles.dataPart}>
        <Formik
          initialValues={formikValues}
          onSubmit={formikValues => {
            this.sendForm(formikValues);
          }}
          validationSchema={product}>
          {formikProps => (
            <React.Fragment>
              {inputFields.map((text, index) => (
                <Input formikProps={formikProps} key={index} field={text} />
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
  dataPart: {
    width: '100%',
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    ...elevation10,
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
});
export default Register;
