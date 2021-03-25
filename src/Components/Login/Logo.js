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
        <Bios width={200} height={200} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container3: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 155,
    justifyContent: 'center',
    ...elevation10,
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo: {height: 155, width: 155, borderRadius: 155},
});
