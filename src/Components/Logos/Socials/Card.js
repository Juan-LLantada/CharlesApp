import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, Linking} from 'react-native';
import {elevation10, width} from '../../../Constants/styles';
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.item = this.props.item;
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.view}
        onPress={() => {
          Linking.openURL(this.item.url);
        }}>
        <View style={styles.card}>
          <this.item.Icon width={width / 12} height={width / 12} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  card: {
    width: width / 7,
    height: width / 7,
    borderRadius: width / 7,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
    ...elevation10,
  },
  option: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    marginTop: 10,
  },
  optionText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 5,
  },
});
