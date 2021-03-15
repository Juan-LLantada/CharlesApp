import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardItem, Left, Body} from 'native-base';
import {UserBlack} from '../../Constants/Icons/design';

export default class CardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CardItem>
        <Left style={styles.iconV}>
          <UserBlack />
        </Left>
        <Body>
          <View style={styles.textV}>
            <Text>Comunidad </Text>
            <Text style={styles.middleText}>Epsilon </Text>
            <Text style={styles.rightText}>Bios</Text>
          </View>
          <Text note>@{this.props.name}</Text>
        </Body>
      </CardItem>
    );
  }
}

const styles = StyleSheet.create({
  textV: {
    flexDirection: 'row',
    flex: 2,
  },
  middleText: {fontSize: 15, fontWeight: 'bold', color: 'black'},
  rightText: {fontSize: 15, fontWeight: 'bold', color: '#89D00B'},
  iconV: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
