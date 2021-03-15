import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {ventasIcons, ventasIcons2} from '../../Constants/data';
import {width} from '../../Constants/styles';

export default class IconosVentas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var key = 0;
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          {ventasIcons.map(icons => (
            <View key={key++} style={styles.dataIcons}>
              <View style={styles.iconos}>
                <icons.Icon />
              </View>
              <Text style={styles.texto}>{icons.text}</Text>
            </View>
          ))}
        </View>
        <View style={{flex: 1.2}}>
          {ventasIcons2.map(icons => (
            <View key={key++} style={styles.dataIcons}>
              <View style={styles.iconos}>
                <icons.Icon />
              </View>
              <Text style={styles.texto}>{icons.text}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconos: {
    padding: 10,
    borderRadius: 50,
    width: 'auto',
    height: 'auto',
    margin: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  dataIcons: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
  },
  texto: {
    fontSize: 15,
    letterSpacing: 1,
  },
  container: {
    width: width,
    flexDirection: 'row',
  },
});
