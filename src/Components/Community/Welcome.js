import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Mundito} from '../../Constants/Icons/design';
import {Divider} from 'react-native-elements';
import {width} from '../../Constants/styles';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {Banner} from './';
import {connect} from 'react-redux';
import {welcomeText1, welcomeText2} from '../../Constants/data';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  user: state.userLoginValues,
});
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground source={Bg} style={styles.container}>
        <View style={styles.biosLogo}>
          <Text style={styles.title1}>Bienvenido</Text>
          <Text style={styles.titleGreen}>@{this.props.user.name}</Text>
          <Divider style={styles.divider} />
          <Text style={styles.welcome}>{welcomeText1}</Text>
          <Mundito style={{width: 30, height: 30}} />
          <Text style={styles.welcome}>{welcomeText2}</Text>
        </View>
        <Banner />
      </ImageBackground>
    );
  }
}
export default connect(mapStateToProps)(Welcome);
const styles = StyleSheet.create({
  container: {width: '100%'},
  title1: {
    paddingHorizontal: 5,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  titleGreen: {
    color: '#89D00B',
    paddingHorizontal: 5,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
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
    fontSize: 20,
    margin: 10,
  },
  divider: {
    backgroundColor: 'lightgrey',
    width: width - 60,
    margin: 10,
  },
});
