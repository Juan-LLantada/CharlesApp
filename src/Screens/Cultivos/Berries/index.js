import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Image, Text} from 'react-native';
import {width} from '../../../Constants/styles';
import {Divider} from 'react-native-elements';
import Header from '../../../Assets/Img/HeadersCultivos/berris.png';
import {EBios} from '../../../Constants/Icons/logos';
import {ColorBar, Footer} from '../../../Components/Cultivos';

export default class Berries extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={Header}
            style={{
              width: width - 20,
              height: 440,
              resizeMode: 'contain',
            }}
          />
          <View style={styles.headerLogo}>
            <EBios style={{width: 120, height: 120}} />
            <Divider style={{backgroundColor: 'grey', width: '100%'}} />
          </View>
          <View style={{flex: 1, padding: 15}}>
            <Text style={{textAlign: 'justify'}}>
              <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
                ¿QUÉ ES?
              </Text>
              {'\n'}
              {'\n'}
              Chronos Life ® es un bioestimulante derivado de extractos
              vegetales, cuyo ingrediente esencial son poliaminas, las cuales le
              permiten a las plantas alcanzar mayor productividad al retrasar el
              inicio de la senescencia.{'\n'}
              {'\n'}
              <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
                ¿PARA QUÉ SIRVE?
              </Text>
              {'\n'}
              {'\n'}
              Mantiene la integridad de la membrana celular, retrasando los
              procesos degenerativos que conducen a la planta a un
              envejecimiento prematuro con los siguientes beneficios:{'\n'}
              {'\n'}● Mayor periodo en la etapa productiva (hasta un 15%). .
              {'\n'}
              {'\n'}● Reduce los daños por efectos oxidativos que genera muerte
              celular en la planta.{'\n'}
              {'\n'}● Disminuye la producción y dinámica del Etileno. Todo lo
              anterior da como resultado el retraso del inicio del proceso de
              envejecimiento de la planta. (SENESCENCIA){'\n'}
              {'\n'}
              <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
                ¿CÓMO FUNCIONA?
              </Text>
              {'\n'}
              {'\n'}
              Las poliaminas que contiene Chronos Life ® permiten que la
              membrana celular de la planta permanezca íntegra por más tiempo al
              mantener la formación continua de proteínas que le dan estructura
              a dicha membrana. {'\n'}
              {'\n'}Contiene el antioxidante más poderoso de la naturaleza.
              También contiene Citocininas y Auxinas derivadas de extractos
              vegetales, las cuales favorecen la división celular y
              organogénesis*.
              {'\n'}
              {'\n'}
              Los nutrientes que contiene postergan el inicio de la senescencia
              y disminuyen el impacto oxidativo, estos son: K, Ca, Zn, B, Co y
              Mo.
              {'\n'}
              {'\n'}
              Chronos Life ® mantiene constante la actividad radicular y la
              formación de frutos o de cualquier órgano de reserva.{'\n'}
              {'\n'}
              <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
                ¿CUÁLES SON SUS BENEFICIOS?{' '}
              </Text>
              {'\n'}
              {'\n'}
              1. Derivado de extractos vegetales. {'\n'}
              {'\n'}2. Ingredientes novedosos y únicos en el mercado: {'\n'}
              {'\n'} A. Poliaminas y Citocininas naturales NO Sintéticas. {'\n'}
              {'\n'} B. Alta concentración del antioxidante Glutation. {'\n'}
              {'\n'}3. Para lograr el mismo beneficio se requeriría aplicar más
              de tres productos.
            </Text>
          </View>
          <View style={styles.redFrame}>
            <Text style={{textAlign: 'justify'}}>
              ● Disminución del estrés oxidativo provocado por condi- ciones
              climáticas, fisiológicas y nutricionales dentro del túnel. {'\n'}
              {'\n'}● Cargadores con mayor número de brotes reproductivos.{' '}
              {'\n'}
              {'\n'}● Disminución del aborto y del desgrane en frambuesas.{'\n'}
              {'\n'}● Uniformización de la maduración en zarzamoras. {'\n'}
              {'\n'}● Mayores tamaños en arándanos. {'\n'}
              {'\n'}● Mayor vida de anaquel.
            </Text>
          </View>
          <ColorBar />
          <View style={{flex: 1, padding: 15, paddingBottom: 0}}>
            <Text style={{textAlign: 'justify'}}>
              <Text style={{textAlign: 'justify', fontWeight: 'bold'}}>
                DOSIS{' '}
              </Text>
              {'\n'}
              {'\n'}500ml en las siguientes etapas, formación de cargadores,
              inicio de floración y en fructificación con frecuencia quincenal.
            </Text>
          </View>
          <EBios style={{width: 120, height: 120}} />
          <Footer
            url={
              'http://161.35.105.244/ficha/BERRIES%20EBIOS%20CHRONOS%20v2.pdf'
            }
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
  zoomable: {
    padding: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  headerLogo: {
    flex: 1,
    width: width,
    padding: 10,
    paddingTop: 0,
    alignItems: 'flex-end',
  },
  redFrame: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
});
