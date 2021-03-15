import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class SectionDivider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    //backgroundColor: 'rgba(60,154,175,0.4)',
    //backgroundColor: '#111d2c',
    backgroundColor: 'rgba(17,29,44,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    color: 'white',
    //color: '#111d2c',
    fontSize: 17,
    // fontWeight: 'bold',
  },
});
