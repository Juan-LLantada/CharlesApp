import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Mundito} from '../../Constants/Icons/design';
import {Divider} from 'react-native-elements';
import {width} from '../../Constants/styles';
import {retrieveData} from '../../Constants/asyncStorage';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {Banner} from './';
export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    };
    this._retrieveData();
  }
  _retrieveData = async () => {
    try {
      let data = await retrieveData('Login');
      this.setState({
        values: JSON.parse(data),
      });
    } catch (error) {}
  };

  render() {
    return (
      <ImageBackground source={Bg} style={styles.container}>
        <View style={styles.biosLogo}>
          <Text style={styles.title1}>Bienvenido</Text>
          <Text style={[styles.title1, styles.title2]}>
            @{this.state.values.name}
          </Text>
          <Divider style={styles.divider} />
          <Text style={styles.welcome}>
            Estás a solo un paso de proyectar tu cultivo a la comunidad! Ahora
            puedes interactuar con nosotros compartiendo una fotografía de tus
            cultivos
          </Text>
          <Mundito style={{width: 30, height: 30}} />
          <Text style={styles.welcome}>
            Solo da clic en nuestro botón{'\n'}"Compartir imagen"{'\n'}para que
            todos puedan verla!
          </Text>
        </View>
        <Banner navigation={this.props.navigation} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {width: '100%'},
  title1: {
    paddingHorizontal: 5,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  title2: {
    color: '#89D00B',
  },

  biosLogo: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
    width: width - 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    borderColor: '#C2C2C2',
  },
  welcome: {
    color: 'black',
    textAlign: 'center',
    // fontStyle: 'italic',
    fontSize: 20,
    margin: 10,
  },
  divider: {
    backgroundColor: 'lightgrey',
    width: width - 60,
    margin: 10,
  },
});
