import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Bg from '../../../Assets/Img/Bg/fondoepsi.png';
import {StomaIcon} from '../../../Constants/Icons/logos';
import {elevation10} from '../../../Constants/styles';
export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container3}>
        <ImageBackground
          style={styles.container2}
          imageStyle={{borderRadius: 205}}
          source={Bg}>
          <View style={styles.card}>
            <StomaIcon style={styles.logo2} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container2: {
    width: 160,
    backgroundColor: '#0d1a1b',
    height: 160,
    borderRadius: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    alignSelf: 'center',
    width: 165,
    margin: 15,
    backgroundColor: 'white',
    height: 165,
    borderRadius: 165,
    justifyContent: 'center',
    ...elevation10,
    alignItems: 'center',
  },
  card: {
    width: 155,
    backgroundColor: 'white',
    height: 155,
    borderRadius: 155,
    marginVertical: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo2: {height: 180, width: 180},
});
