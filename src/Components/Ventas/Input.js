import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {elevation5} from '../../Constants/styles';
import {Alert} from '../../Constants/Icons/design';
function Input({formikProps, field, ...rest}) {
  return (
    <View style={{width: '100%'}}>
      <Text style={styles.label}>{field.placeholder}</Text>
      <TextInput
        style={[
          styles.input,
          formikProps.touched[field.key] && formikProps.values[field.key] == ''
            ? styles.warningInput
            : null,
        ]}
        placeholder={field.placeholder}
        placeholderTextColor="#8A8A8A"
        onChangeText={formikProps.handleChange(field.key)}
        onBlur={formikProps.handleBlur(field.key)}
        returnKeyType="done"
        autoCapitalize={field.cap}
        secureTextEntry={field.secure}
        {...rest}
      />
      {formikProps.touched[field.key] && formikProps.values[field.key] == '' && (
        <View style={styles.alertV}>
          <Text style={styles.alert}>
            {formikProps.touched[field.key] && formikProps.errors[field.key]}
          </Text>
          <Alert width={15} height={15} />
        </View>
      )}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    marginVertical: 10,
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
  },
  input: {
    color: 'black',
    height: 'auto',
    borderRadius: 25,
    borderWidth: 0.5,
    ...elevation5,
    padding: 10,
    marginVertical: 5,
    borderColor: 'rgba(0,0,0,0.2)',
    width: '100%',
    backgroundColor: 'white',
  },
  warningInput: {
    borderColor: 'red',
  },
  alert: {
    color: 'red',
    fontSize: 10,
    letterSpacing: 0.5,
    textAlign: 'right',
    marginRight: 5,
  },
  alertV: {
    padding: 10,
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
