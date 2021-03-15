import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {width} from '../../Constants/styles';
import {Favorites, WorldPlant} from '../../Constants/Icons/design';

export default class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: true,
      favorites: false,
    };
  }

  tabFunction(all, fav) {
    this.setState(
      {
        all: all,
        favorites: fav,
      },
      () => {
        this.props.tabFunction(all, fav);
      },
    );
  }

  render() {
    return (
      <View style={styles.buttonV}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => this.tabFunction(true, false)}>
          <WorldPlant />
          <Text
            style={{
              marginTop: 5,
              color: this.state.all ? '#007AFF' : 'black',
            }}>
            Todos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => this.tabFunction(false, true)}>
          <Favorites />
          <Text
            style={{
              marginTop: 5,
              color: this.state.favorites ? '#007AFF' : 'black',
            }}>
            Favoritos del mes
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonV: {
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    borderColor: 'lightgrey',
  },
  menuButton: {
    width: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRightWidth: 0.5,
    borderColor: 'lightgrey',
    height: 'auto',
  },
});
