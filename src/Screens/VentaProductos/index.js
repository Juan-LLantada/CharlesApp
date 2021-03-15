import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Form} from '../../Constants/Icons/design';
import {width} from '../../Constants/styles';
import {Header} from '../../Components/Global';
import {VentasEBIOS, Formulario} from '../../Components/Ventas';
import {retrieveData} from '../../Constants/asyncStorage';
export default class VentaProductos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
    };
    this._retrieveData();
  }

  confirmOrder(datos) {
    this.props.navigation.navigate('Confirmacion', {
      data: datos,
    });
  }
  _retrieveData = async () => {
    try {
      let data = await retrieveData('@MySuperStore:key');
      if (data !== null) {
        this.setState({
          login: true,
        });
      } else if (data == null) {
        this.setState({
          login: false,
        });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header titulo={'VENTAS'} navigation={this.props.navigation} />
        <View style={styles.bottomContainer}>
          <ScrollView>
            <View style={styles.bottomView}>
              <VentasEBIOS />
            </View>
            <View style={styles.subView}>
              <Text style={[styles.title1, styles.filosofia]}>
                - Deseas ordenar alguno de nuestros productos? -
              </Text>
            </View>
            <View style={styles.bottomLogin}>
              <View style={styles.italicView}>
                <Text style={{fontStyle: 'italic', textAlign: 'center'}}>
                  Puedes llenar a continuación nuestro formulario de pedidos!
                </Text>
                <Form style={{marginTop: 10}} />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
//  <Formulario function={this.confirmOrder.bind(this)} />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  bottomContainer: {flex: 1, backgroundColor: '#FFFFFF'},
  bottomView: {
    height: 'auto',
    alignItems: 'center',
    backgroundColor: '#f8f6f7',
  },
  title1: {
    paddingHorizontal: 5,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 40,
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
    backgroundColor: 'black',
    margin: 10,
    marginBottom: 20,
  },
  filosofia: {
    color: '#ffffff',
    paddingTop: 0,
    textAlign: 'center',
    fontSize: 15,
    letterSpacing: 3,
    paddingHorizontal: 0,
  },
  image: {
    width: width / 2,
    margin: 10,
    height: 200,
    borderBottomRightRadius: 20,
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
  italicView: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D8D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginVertical: 20,
  },
  bottomLogin: {
    flex: 1,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
