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
    return (
      <Card>
        <CardHeader
          name={this.props.uri.search('FAV') != -1 ? string[2] : string[1]}
        />
        <CardItem cardBody>
          <Image
            source={{uri: this.props.uri}}
            style={{width: '100%', height: 400}}
          />
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
