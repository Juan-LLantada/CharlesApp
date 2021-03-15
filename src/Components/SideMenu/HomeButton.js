import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Home} from '../../Constants/Icons/design';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
class HomeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  navigateToScreen() {
    this.props.navRedux.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.navigateToScreen();
          }}>
          <Home width={30} height={30} />
          <Text style={styles.buttonText}>HOME</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default connect(mapStateToProps)(HomeButton);
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
