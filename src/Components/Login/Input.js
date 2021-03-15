import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Item, Input as InputComponent, View} from 'native-base';
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let placeholder =
      this.props.placeholder == 'Usuario' ? 'Usuario' : 'Contraseña';
    return (
      <View style={styles.container}>
        <Item rounded style={{borderColor: '#ACACAC'}}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
            }}
          />
          <InputComponent
            placeholder={placeholder}
            placeholderTextColor="black"
            autoCapitalize={'none'}
            secureTextEntry={this.props.secure}
            style={{color: 'black'}}
            onChangeText={text => {
              this.props.change(text, this.props.placeholder);
            }}
          />
        </Item>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '90%',
    marginVertical: 10,
  },
});
