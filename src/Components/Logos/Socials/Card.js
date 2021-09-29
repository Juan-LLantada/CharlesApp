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
          <this.item.Icon width={30} height={30} />
          <Text style={styles.title}>{this.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 4,
    padding: 5,
    borderColor: 'rgba(255,255,255,0.5)',
    width: '100%',
    marginVertical: 10,
  },
  card: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    ...elevation10,
    borderRadius: 20,
    padding: 10,
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
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'grey',
  },
});
