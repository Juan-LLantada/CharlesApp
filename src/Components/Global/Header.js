import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {Header as NHeader} from 'native-base';
import {OatRight, OatLeft, Menu} from '../../Constants/Icons/design';
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
        <View style={styles.left}>
          <TouchableOpacity
            onPress={() => {
              this.props.navRedux.dispatch(DrawerActions.toggleDrawer());
            }}>
            <Menu width={30} height={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <OatLeft />
          <Text style={styles.headerText}>{this.props.titulo}</Text>
          <OatRight />
        </View>
      </NHeader>
    );
  }
}
export default connect(mapStateToProps)(Header);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#111d2c',
    height: 60,
    paddingLeft: 20,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  left: {flex: 1, justifyContent: 'center'},
  right: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
