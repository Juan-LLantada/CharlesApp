import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {width} from '../../Constants/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/native';
import {Header as NHeader, Left, Body, Right} from 'native-base';
import {OatRight, OatLeft} from '../../Constants/Icons/design';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NHeader androidStatusBarColor={'black'} style={styles.container}>
        <Left>
          <TouchableOpacity
            onPress={() => {
              this.props.navRedux.dispatch(DrawerActions.toggleDrawer());
            }}>
            <Icon name="menu" size={30} style={styles.icon} />
          </TouchableOpacity>
        </Left>
        <Body style={styles.body}>
          <OatLeft />
          <Text style={styles.headerText}>{this.props.titulo}</Text>
          <OatRight />
        </Body>
        <Right />
      </NHeader>
    );
  }
}
export default connect(mapStateToProps)(Header);
const styles = StyleSheet.create({
  container: {backgroundColor: '#111d2c', height: 60, paddingLeft: 20},
  card: {
    width: width,
    height: 'auto',
    borderTopWidth: 0.5,
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    color: 'white',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
});
