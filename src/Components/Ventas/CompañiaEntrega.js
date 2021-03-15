import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default class CompañiaEntrega extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otra: false,
      fija: true,
      otherCompañy: '',
    };
  }

  check(text) {
    text == 'Otra'
      ? this.setState({
          otra: true,
          fija: false,
        })
      : this.setState(
          {
            fija: true,
            otra: false,
            otherCompañy: 'Paquetería TRESGUERRAS',
          },
          () => {
            this.props.function(this.state.otherCompañy);
          },
        );
  }

  render() {
    const data = ['Paquetería TRESGUERRAS', 'Otra'];
    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={{letterSpacing: 2}}>Escoge tu compañía de entrega</Text>
        </View>
        {data.map((text, index) => (
          <View
            key={index}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              center
              checkedColor="black"
              checked={text == 'Otra' ? this.state.otra : this.state.fija}
              onPress={() => this.check(text)}
            />
            <Text>{text}</Text>
          </View>
        ))}
        {this.state.otra && (
          <View style={styles.inputV}>
            <TextInput
              style={[styles.input2]}
              placeholder={'Compañia de entrega de su agrado'}
              placeHolderTextColor="black"
              onChangeText={text => {
                this.props.function(text);
              }}
              autoCapitalize="sentences"
              returnKeyType="done"
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    flex: 1,
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D8D3D3',
    marginBottom: 10,
    alignItems: 'center',
  },
  container: {flex: 1, width: '100%', paddingBottom: 10, height: 'auto'},
  containerStyle: {
    borderRadius: 20,
  },
  input2: {
    //borderRadius: 10,
    height: 40,
    backgroundColor: '#F8F8F8',
    paddingLeft: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
  },
  inputV: {
    height: 'auto',
    width: '100%',
  },
});
