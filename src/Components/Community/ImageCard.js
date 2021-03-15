import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card, CardItem, Body} from 'native-base';
import {Bios} from '../../Constants/Icons/logos';
import {CardHeader} from './index';

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let string = this.props.uri.split('&&');
    console.log(string[1]);

    return (
      <Card>
        {string[1] && <CardHeader name={string[1]} />}
        <CardItem cardBody>
          <Bios width={300} height={300} />
        </CardItem>
        <CardItem>
          <Body style={styles.cardFooter}>
            <Bios width={50} height={50} />
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {height: 300, width: null, flex: 1},
});
