import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Container, Content, Card, CardItem} from 'native-base';
import {Divider} from 'react-native-elements';
import {CardElement, CardHeader} from './index';
import {BlueAddres, BluePhone} from '../../Constants/Icons/design';

export default class DistributorCard extends Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{width: '100%', paddingHorizontal: 10, paddingVertical: 20}}>
          {this.props.data.map((datos, index) => (
            <Card key={index}>
              <CardHeader titulo1={datos.titulo1} titulo2={datos.titulo2} />
              <CardItem cardBody style={styles.body}>
                <datos.Imagen width={200} height={200} />
              </CardItem>
              <CardElement text={datos.telefonos} Icon={BluePhone} />
              <Divider style={styles.divider} />
              <CardElement text={datos.Dirección} Icon={BlueAddres} />
            </Card>
          ))}
        </View>
      </ScrollView>
    );
  }
}
/*
el otro en colima proveedora 
pacifico noroeste y norte sitman 
altiplano*/
const styles = StyleSheet.create({
  logo: {width: 90, height: 90},
  image: {
    height: 50,
    width: 50,
  },
  divider: {
    backgroundColor: 'black',
    width: '90%',
    alignSelf: 'center',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
