import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import {width, height, safeAreaTop} from '../../Constants/styles';
import StomaBg from '../../Assets/Img/Bg/stomabg.jpeg';
import PotencialS from '../../Assets/Svg/HomeStoma/potencialstoma.svg';
import MidStoma from '../../Assets/Svg/HomeStoma/midstoma.svg';
import OmriLogo from '../../Assets/Svg/HomeStoma/omrilogo.svg';
import LogoStoma from '../../Assets/Svg/HomeStoma/stoma.svg';

const totalH = height - safeAreaTop - 60;
export default class Stoma extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground source={StomaBg} style={styles.bg}>
        <View style={styles.container}>
          <OmriLogo width={'100%'} height={totalH / 8} />
          <LogoStoma width={'100%'} height={totalH / 8} />
          <MidStoma width={'100%'} height={totalH / 3} />
          <PotencialS width={'100%'} height={totalH / 8} />
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
    padding: 20,
  },
  bg: {
    width: width,
    height: totalH,
  },
});
