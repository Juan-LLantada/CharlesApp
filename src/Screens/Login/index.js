import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {TextBox, Logo, RegistroView} from '../../Components/Login';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login: false,
    };
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <ImageBackground source={Bg} style={styles.container}>
            <View style={styles.centerView}>
              <View style={styles.innerCenter}>
                <Logo />
                <View style={styles.logView}>
                  <TextBox navigation={this.props.navigation} />
                </View>
              </View>
            </View>
            <RegistroView navigation={this.props.navigation} />
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  innerCenter: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
  },
  logoView: {
    backgroundColor: 'white',
    borderRadius: 100,
    margin: 20,
    padding: 10,
    width: 170,
    height: 170,
  },
  centerView: {
    marginVertical: 20,
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  container: {
    flex: 1,
    padding: 20,
    height: '150%',
  },
  titleView: {
    backgroundColor: '#5f7149',
    height: 'auto',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    ...Platform.select({
      ios: {
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  logView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
  },
});
