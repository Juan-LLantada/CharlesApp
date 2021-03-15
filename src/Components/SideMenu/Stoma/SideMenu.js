import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Logo, MenuAccordion} from './index';
import {BackButton, HomeButton} from '../';
import Bg from '../../../Assets/Img/Bg/fondoepsi.png';
import {
  ScrollView,
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distribuidores: false,
      cultivos: false,
      servicios: false,
      values: [],
    };
  }
  render() {
    return (
      <ImageBackground source={Bg} style={styles.container}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <Logo />
            <View style={styles.acc}>
              <MenuAccordion />
            </View>
            <BackButton />
            <HomeButton />
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
//
export default connect(mapStateToProps)(SideMenu);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    padding: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 150,
    alignSelf: 'center',
    margin: 20,
  },
  acc: {width: '100%', padding: 5},
});
