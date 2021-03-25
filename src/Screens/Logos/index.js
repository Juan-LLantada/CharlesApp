import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Bg from '../../Assets/Img/Bg/fondoepsi.png';
import {CardListC} from '../../Components/Logos/Community';
import {CardListS} from '../../Components/Logos/Socials';
import {
  Header,
  SectionDivider,
  CardList,
  ButtonView,
} from '../../Components/Logos/index';
import {elevation10} from '../../Constants/styles';
import {getUser} from '../../Actions/userValues';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
class Logos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    };
    this.props.dispatch(getUser());
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
              <ButtonView />
              <SectionDivider title={'Contacto y redes sociales'} />
              <CardListS navigation={this.props.navigation} />
            </ScrollView>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default connect(mapStateToProps)(Logos);
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
    marginVertical: 5,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    ...elevation10,
  },
});
