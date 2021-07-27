import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default class CompañiaEntrega extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherCompañy: '',
      selected: 'Paquetería TRESGUERRAS',
    };
  }

  check(text) {
    text == 'Otra'
      ? this.setState({
          selected: 'Otra',
        })
      : this.setState(
          {
            selected: 'Paquetería TRESGUERRAS',
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
          <Text style={styles.labelTxt}>Escoge tu compañía de entrega</Text>
        </View>
        {data.map((text, index) => (
          <View
            key={index}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CheckBox
                tintColors={{true: '#559e26', false: '#aaaaaa'}}
                onCheckColor={'#559e26'}
                onTintColor={'#559e26'}
                key={index}
                disabled={false}
                value={this.state.selected == text ? true : false}
                onValueChange={() => this.check(text)}
              />
            </View>
            <Text style={{fontSize: 15, marginLeft: 5}}>{text}</Text>
          </View>
        ))}
        {this.state.selected == 'Otra' && (
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
  labelTxt: {
    textAlign: 'center',
    marginVertical: 10,
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'grey',
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
