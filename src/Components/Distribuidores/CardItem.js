import React, {Component} from 'react';
import {CardItem, Text, Left, Right} from 'native-base';
export default class CardElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let Icon = this.props.Icon;
    return (
      <CardItem>
        <Left>
          <Text style={{fontSize: 12}}>{this.props.text}</Text>
        </Left>
        <Right>
          <Icon />
        </Right>
      </CardItem>
    );
  }
}
