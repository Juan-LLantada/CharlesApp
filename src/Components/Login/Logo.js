import React, {Component} from 'react';
import {View, Image, StyleSheet, Platform} from 'react-native';
import {Bios} from '../../Constants/Icons/logos';
import {elevation10} from '../../Constants/styles';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container3}>
        <Bios width={155} height={155} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container3: {
    alignSelf: 'center',
    width: 155,
    margin: 15,
    backgroundColor: 'white',
    height: 155,
    borderRadius: 155,
    justifyContent: 'center',
    ...elevation10,
    alignItems: 'center',
  },
  logo: {height: 155, width: 155, borderRadius: 155},
});
