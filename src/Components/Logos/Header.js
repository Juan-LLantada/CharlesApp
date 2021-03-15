import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {OatLeft, OatRight} from '../../Constants/Icons/design';
import {width} from '../../Constants/styles';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <OatLeft />
          <Text style={styles.headerText}> B I E N V E N I D O </Text>
          <OatRight />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: width,
    height: 'auto',
    backgroundColor: 'white',
  },
  header: {
    width: width,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    //backgroundColor: '#1b3f4c',
    backgroundColor: '#111d2c',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textShadowRadius: 10,
    color: 'white',
  },
});
