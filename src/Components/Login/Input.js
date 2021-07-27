import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {elevation10} from '../../Constants/styles';
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.item = this.props.item;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.item.label}</Text>
        <TextInput
          placeholder={this.item.placeholder}
          placeholderTextColor="grey"
          autoCapitalize={'none'}
          secureTextEntry={this.item.secure}
          style={styles.input}
          onChangeText={text => {
            this.props.change(text, this.item.key);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'grey',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    color: 'black',
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
