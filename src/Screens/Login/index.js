import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {TextBox, RegistroView} from '../../Components/Login';
import {Bios} from '../../Constants/Icons/logos';
import {height} from '../../Constants/styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground source={Bg} style={styles.bg}>
        <ScrollView style={{flex: 1}}>
          <KeyboardAvoidingView>
            <View style={styles.container}>
              <View style={styles.card}>
                <Bios width={150} height={150} />
                <TextBox navigation={this.props.navigation} />
                <RegistroView navigation={this.props.navigation} />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {flex: 1, minHeight: height},
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
