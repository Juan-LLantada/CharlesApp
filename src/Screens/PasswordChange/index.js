/* @flow */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {Form} from '../../Components/PasswordChange';
class PasswordChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <ImageBackground source={Bg} style={styles.bg}>
        <ScrollView style={{flex: 1}}>
          <KeyboardAvoidingView>
            <View style={styles.container}>
              <Form navigation={this.props.navigation} />
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  container: {
    width: '100%',
    padding: 10,
  },
});
export default PasswordChange;
