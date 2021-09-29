import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {width} from '../../Constants/styles';
import Circle from '../../Assets/Svg/HomeStoma/StomaCircle.svg';
import StomaBg from '../../Assets/Img/Bg/stomabg.jpeg';
export default class Stoma extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground source={StomaBg} style={styles.bg}>
        <View style={styles.svgBg}>
          <Circle width={width - 20} height={width - 20} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  bg: {
    width: width,
    height: width,
  },
  svgBg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
});
