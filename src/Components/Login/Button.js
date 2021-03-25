import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {RightArrow} from '../../Constants/Icons/design';
import {elevation10} from '../../Constants/styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  aver() {
    this.props.press(
      this.props.email,
      this.props.password,
      this.props.navigation,
    );
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.type != 'login' ? this.props.press() : this.aver();
        }}
        style={[styles.button]}>
        <Text style={styles.btnText}>{this.props.text}</Text>
        <RightArrow />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
  bg: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {color: 'white', fontSize: 15, fontWeight: 'bold'},
});
