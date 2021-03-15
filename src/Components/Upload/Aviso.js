import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {EBios} from '../../Constants/Icons/logos';

export default class Aviso extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.title}>Querido usuario:</Text>
        <Text style={styles.body}>
          Nosotros no utilizaremos ninguna imagen que nos compartas para ninguna
          campaña, por favor evita subir imágenes que no te pertenezcan o que
          incluyan el nombre de productos y/o marcas.
        </Text>
        <Text style={styles.textBot}>Evítanos la pena de rechazarlas!</Text>
        <EBios width={100} height={100} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textBot: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  body: {fontSize: 15, textAlign: 'justify'},
});
