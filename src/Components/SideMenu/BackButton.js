import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Back} from '../../Constants/Icons/design';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
class BackButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  navigateToScreen = route => () => {
    this.props.navRedux.navigate('Logos');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.navigateToScreen('Logos')}>
          <Back width={30} height={30} />
          <Text style={styles.buttonText}>REGRESAR A INICIO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(mapStateToProps)(BackButton);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  button: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(60,154,175,0.5)',
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {color: '#ffffff', marginLeft: 10, fontWeight: 'bold'},
});
