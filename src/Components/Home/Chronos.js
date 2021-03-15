import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import {
  height,
  width,
  safeAreaTop,
} from '../../Constants/styles';
import ChronosBg from '../../Assets/Img/Bg/chronosbg.png';
import TextChronos from '../../Assets/Svg/HomeChronos/textchronos.svg';
import PolaminasC from '../../Assets/Svg/HomeChronos/polaminaschronos.svg';
import LogoChronos from '../../Assets/Svg/Logos/chronos.svg';
const totalH = height - safeAreaTop - 60;

export default class Chronos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground source={ChronosBg} style={styles.bg}>
        <View style={styles.container}>
          <LogoChronos height={totalH / 3} width={width} />
          <PolaminasC height={totalH / 3} width={width} />
          <TextChronos height={totalH / 3} width={width - 100} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  bg: {
    width: width,
    height: totalH,
  },
});
