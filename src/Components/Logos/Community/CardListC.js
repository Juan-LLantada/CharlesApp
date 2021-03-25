import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {community} from '../../../Constants/data';
import {NavIcon} from './index';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
});
class CardListC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {community.map((item, index) => (
          <NavIcon item={item} key={index} />
        ))}
      </View>
    );
  }
}
export default connect(mapStateToProps)(CardListC);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
