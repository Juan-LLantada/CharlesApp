import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {OatLeft, OatRight} from '../../Constants/Icons/design';
import {width} from '../../Constants/styles';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  user: state.userLoginValues,
});
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('AQUI STATE');
    console.log(this.props.user);
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <OatLeft />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.headerText}> B I E N V E N I D O </Text>
            {this.props.user.name != '' && (
              <Text style={styles.name}>{this.props.user.name}</Text>
            )}
          </View>
          <OatRight />
        </View>
      </View>
    );
  }
}
export default connect(mapStateToProps)(Header);
const styles = StyleSheet.create({
  card: {
    width: width,
    height: 'auto',
    backgroundColor: 'white',
  },
  header: {
    width: width,
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
    //backgroundColor: '#1b3f4c',
    backgroundColor: '#111d2c',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    fontSize: 15,
    color: 'white',
  },
});
