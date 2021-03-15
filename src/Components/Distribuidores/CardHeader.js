import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {CardItem, Text, Left, Body} from 'native-base';
import {Bios} from '../../Constants/Icons/logos';
export default class CardHeader extends Component {
  render() {
    return (
      <View>
        <CardItem>
          <Left>
            <View style={styles.container3}>
              <Bios width={50} height={50} />
            </View>
            <Body>
              <Text>{this.props.titulo1}</Text>
              <Text note>{this.props.titulo2}</Text>
            </Body>
          </Left>
        </CardItem>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container3: {
    alignSelf: 'center',
    width: 50,
    backgroundColor: 'white',
    height: 50,
    margin: 10,
    borderRadius: 50,
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
    alignItems: 'center',
  },
  logo: {height: 50, width: 50, borderRadius: 50},
});
