import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {CardListC} from '../../Components/Logos/Community';
import {CardListS} from '../../Components/Logos/Socials';
import {Header, SectionDivider, CardList} from '../../Components/Logos/index';
import {elevation10} from '../../Constants/styles';

export default class Logos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.flex1}>
        <ImageBackground style={styles.flex1} source={Bg}>
          <View style={styles.flex1}>
            <Header />
            <ScrollView style={styles.flex1}>
              <SectionDivider title={'Nuestros Productos'} />
              <CardList navigation={this.props.navigation} />
              <SectionDivider title={'Nuestros servicios'} />
              <CardListC navigation={this.props.navigation} />
              <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>
                    INICIA SESIÓN!
                  </Text>
                </TouchableOpacity>
              </View>
              <SectionDivider title={'Contacto y redes sociales'} />
              <CardListS navigation={this.props.navigation} />
            </ScrollView>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#8FC177',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    ...elevation10,
  },
});
