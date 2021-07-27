import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {VentasEBIOS, Formulario} from '../../Components/Ventas';
export default class VentaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
  }
  confirmOrder(datos) {
    this.props.navigation.navigate('Confirmacion', {
      data: datos,
    });
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <VentasEBIOS />
            <View style={styles.banner}>
              <Text style={styles.bannerText}>
                - Llena nuestro formulario de pedidos -
              </Text>
            </View>
            <Formulario function={this.confirmOrder.bind(this)} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  bottomView: {
    height: 'auto',
    alignItems: 'center',
    backgroundColor: '#f8f6f7',
  },
  banner: {
    borderRadius: 100,
    padding: 10,
    backgroundColor: 'black',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  bannerText: {
    color: '#000000',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 15,
  },
});
