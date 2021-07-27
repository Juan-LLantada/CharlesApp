import React, {Component} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import {presentaciones} from '../../Constants/data';

export default class Presentaciones extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      value: '1 Litro',
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
    var value = this.state.value;
    if (selectedIndex == 0) {
      value = '1 Litro';
    } else if (selectedIndex == 1) {
      value = '10 Litros';
    } else {
      value = '20 Litros';
    }

    this.props.function(value);
  }

  render() {
    const {selectedIndex} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={styles.labelTxt}>Presentación del producto</Text>
        </View>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={presentaciones}
          containerStyle={{height: 100}}
          buttonStyle={{backgroundColor: 'white'}}
          containerStyle={[styles.containerStyle]}
          selectedButtonStyle={{backgroundColor: 'black'}}
          textStyle={{color: 'black'}}
          selectedTextStyle={{color: '#89D00B'}}
        />
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
  container: {flex: 1, width: '100%', paddingBottom: 10},
  containerStyle: {
    borderRadius: 20,
  },
});
