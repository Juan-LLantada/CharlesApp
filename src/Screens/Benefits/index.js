import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Chronos, DocumentList, Stoma} from '../../Components/Benefits';
import {connect} from 'react-redux';
import {chronosResearches, stomaResearches} from '../../Constants/data';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  selected: state.selectedProduct.selected,
});
class Benefits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          {this.props.selected.title == 'CHRONOS' ? <Chronos /> : <Stoma />}
          <View style={styles.banner}>
            <Text style={styles.bannerText}>INVESTIGACIONES</Text>
          </View>
          <DocumentList
            list={
              this.props.selected.title == 'CHRONOS'
                ? chronosResearches
                : stomaResearches
            }
          />
        </View>
      </ScrollView>
    );
  }
}
export default connect(mapStateToProps)(Benefits);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6f7',
    paddingBottom: 20,
  },
  banner: {
    width: '100%',
    backgroundColor: '#121e2f',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
