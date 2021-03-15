import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Plantita from '../../Assets/Svg/Design/oat.svg';
import Plantita2 from '../../Assets/Svg/Design/oat2.svg';
import {screenWidth} from '../../Assets/Constants/Dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from 'react-navigation-drawer';
import Aver from '../../Assets/Images/farm2.jpg';
import Aver2 from '../../Assets/Images/farm7.jpg';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.card}>
        <ImageBackground style={{width: '100%', height: 5}} source={Aver} />
        <ImageBackground style={styles.header} source={Aver2}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.dispatch(DrawerActions.toggleDrawer());
            }}>
            <Icon name="menu" size={30} style={styles.icon} />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginHorizontal: 10}}>
            <Plantita2 />
            <Text style={styles.headerText}> REGÍSTRATE ! </Text>
            <Plantita />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Icon name="home" size={30} style={styles.icon} />
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground style={{width: '100%', height: 5}} source={Aver} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: screenWidth,
    height: 'auto',
    borderTopWidth: 0.5,
  },
  header: {
    width: screenWidth,
    height: 'auto',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textShadowRadius: 10,
    color: 'white',
  },
  icon: {
    color: 'white',
    height: 35,
    width: 35,
    textShadowRadius: 15,
    textShadowColor: '#A0AEB1',
  },
});
