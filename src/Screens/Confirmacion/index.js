import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {width} from '../../Constants/styles';
import {orderFailed, orderSuccess} from '../../Constants/alerts';
import {OrderConfirm} from '../../Components/Confirmacion';
import {POST} from '../../Constants/fetchFunctions';
export default class Confirmacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  regresar() {
    this.props.navigation.navigate('Ventas');
  }
  confirm = async () => {
    let data = this.setData();
    let response = await POST(
      {
        Destinatario: 'alopez@epsilonbios.com',
        texto: JSON.stringify({data}),
      },
      'Correos/SendMail',
    );
    response[0] == 200
      ? orderSuccess(this.props.navigation)
      : orderFailed(this.props.navigation);
  };

  setData() {
    const datos = this.props.route.params.data[0];
    const data = [
      {titulo: 'Nombre', value: datos.name},
      {titulo: 'Nombre del producto', value: datos.productName},
      {titulo: 'Dirección de entrega', value: datos.address},
      {titulo: 'Correo de contacto', value: datos.emailTransfer},
      {titulo: 'Presentación del producto', value: datos.presentacion},
      {titulo: 'Compañia de entrega', value: datos.compañia},
      {titulo: 'Fecha de entrega', value: datos.fecha},
    ];
    return data;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <ScrollView>
            <View style={styles.subView}>
              <Text style={styles.title1}>
                - Solo falta confirmar tu orden -
              </Text>
            </View>
            <OrderConfirm data={this.setData()} />
            <View style={styles.btnRegV}>
              <TouchableOpacity
                onPress={() => {
                  this.confirm();
                }}
                style={styles.btn}>
                <Text style={styles.btnTxt}>Enviar pedido</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.regresar();
                }}
                style={styles.btn}>
                <Text style={styles.btnTxt}>Regresar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  bottomContainer: {flex: 1, backgroundColor: '#FFFFFF'},
  bottomView: {
    height: 'auto',
    alignItems: 'center',
  },
  title1: {
    paddingHorizontal: 5,
    color: '#000000',
    fontSize: 20,
  },
  title2: {
    color: '#89D00B',
  },
  textView: {
    margin: 20,
    justifyContent: 'center',
    height: 'auto',
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  subView: {
    borderWidth: 1,
    borderRadius: 100,
    padding: 10,
    backgroundColor: '#f8f6f7',
    margin: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  principalText: {
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'left',
    color: '#000000',
    textShadowRadius: 10,
    textShadowColor: '#F5F5F5',
  },
  bottomText: {
    backgroundColor: 'black',
    width: width,
    height: 'auto',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    width: 200,
    height: 50,
    backgroundColor: '#2A691A',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    shadowRadius: 15,
    shadowColor: '#A0AEB1',
    flexDirection: 'row',
    paddingHorizontal: 20,
    margin: 20,
  },
  italicView: {
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D8D3D3',
    padding: 10,
    margin: 20,
  },
  bottomLogin: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRegV: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  btn: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2,
    backgroundColor: '#000000',
    marginVertical: 10,
  },
  btnTxt: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});
