import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../../Components/Global';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {RightArrow} from '../../Constants/Icons/design';
import {width, height} from '../../Constants/styles';
import {Logo} from '../../Components/Login';

export default class OffLine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground style={styles.bg} source={Bg}>
        <Header navigation={this.props.navigation} titulo={' '} />
        <View style={styles.container}>
          <View style={styles.biosLogo}>
            <Logo />
            <Text style={styles.title}>
              Te invitamos a que seas parte de nosotros.
            </Text>
            <Text style={styles.text}>
              Únete a nuestra comunidad{' '}
              <Text style={styles.title1}>Epsilon </Text>
              <Text style={[styles.title1, styles.title2]}>Bios</Text> y así
              accederas a todas nuestras funcionalidades.
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text style={styles.textButton}>INICIAR SESIÓN / REGISTRARSE</Text>
            <RightArrow />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {color: 'black', fontSize: 15, textAlign: 'justify', padding: 10},
  title: {color: 'black', fontWeight: 'bold'},
  bg: {
    width: width,
    height: height,
  },
  title1: {
    paddingHorizontal: 5,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  title2: {
    color: '#89D00B',
  },
  button: {
    width: width - 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'black',
    padding: 10,
    paddingVertical: 20,
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biosLogo: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
    width: width - 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    borderColor: '#C2C2C2',
  },
  textButton: {
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
