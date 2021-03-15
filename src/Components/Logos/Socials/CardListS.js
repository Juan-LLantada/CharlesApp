import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from './index';
import {socials} from '../../../Constants/data';

export default class CardListS extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        {socials.map((item, index) => (
          <Card item={item} key={index} navigation={this.props.navigation} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
