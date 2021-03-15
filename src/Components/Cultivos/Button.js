import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {RightArrow} from '../../Constants/Icons/design';
import {elevation10} from '../../Constants/styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.press} style={[styles.button]}>
        <Text style={{color: 'white'}}>{this.props.text}</Text>
        <RightArrow />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#0d1a1b',
    justifyContent: 'space-between',
    borderRadius: 20,
    margin: 20,
    ...elevation10,
  },
});
