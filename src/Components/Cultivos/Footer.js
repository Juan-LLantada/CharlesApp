import React, {Component} from 'react';
import {View, Text, Linking, StyleSheet} from 'react-native';
import {width} from '../../Constants/styles';
import {Button} from './index';
import {Divider} from 'react-native-elements';
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openFile() {
    Linking.openURL(this.props.url);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{padding: 15, paddingTop: 0}}>
          <Text style={styles.greyText}>
            Los efectos anteriormente mencionados logran en la planta el
            siguiente beneficio:
          </Text>
          <Text style={styles.greenText}>
            MANTENER A LA PLANTA EN LA ETAPA REPRODUCTIVA POR MÁS TIEMPO.
          </Text>
        </View>
        <View style={styles.footer}>
          <Divider style={styles.dividerBot} />
          <Text style={{fontSize: 15, fontStyle: 'italic'}}>
            Descarga la ficha técnica!
          </Text>
          <Button press={this.openFile.bind(this)} text={'DESCARGAR'} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    width: width,
  },
  dividerBot: {backgroundColor: 'grey', width: '100%', marginBottom: 20},

  greenText: {
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#137a36',
    fontSize: 15,
  },
  greyText: {
    textAlign: 'justify',
    fontWeight: 'bold',
    color: '#757574',
  },
});
