import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from '../../Components/Global/index';
import {Chronos, Stoma} from '../../Components/Home';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  selected: state.selectedProduct.selected,
});
class GolfField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Header titulo={'Campos de Golf'} />
        {this.props.selected.title == 'CHRONOS' ? <Chronos /> : <Stoma />}
      </View>
    );
  }
}
export default connect(mapStateToProps)(GolfField);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6f7',
  },
});
