import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Item, Input as InputComponent, View} from 'native-base';
import {elevation10} from '../../Constants/styles';
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <InputComponent
        placeholder={this.props.placeholder}
        placeholderTextColor="grey"
        autoCapitalize={'none'}
        secureTextEntry={this.props.secure}
        style={styles.input}
        onChangeText={text => {
          this.props.change(text, this.props.placeholder);
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '90%',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    ...elevation10,
    padding: 10,
    marginVertical: 10,
  },
});
