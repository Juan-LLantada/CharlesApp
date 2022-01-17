import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header} from '../../Components/Global/index';
import {Chronos, Stoma} from '../../Components/Home';
import {connect} from 'react-redux';
import {Footer} from '../../Components/Cultivos';

const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  selected: state.selectedProduct.selected,
});
import GolfField2 from '../../Assets/Svg/Golfield/GolField.svg';
import {height, width, safeAreaTop} from '../../Constants/styles';
const totalH = height - safeAreaTop - 60;
class GolfField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView>
        <Header titulo={'Campos de Golf'} />
        <GolfField2 height={totalH * 1.5} />
        <Footer url={'http://161.35.105.244/ficha/BROCHUREGOLF.pdf'} />
      </ScrollView>
    );
  }
}
export default connect(mapStateToProps)(GolfField);
const styles = StyleSheet.create({
  container: {},
  bg: {
    width: width,
    height: totalH,
  },
});
