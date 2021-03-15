import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {AccordionItem} from '../index';
import {stomaSideBar} from '../../../Constants/data';
import {Icon, Accordion} from 'native-base';
const mapStateToProps = state => ({
  state: state,
  selected: state.selectedProduct.selected.title,
});
class MenuAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _renderHeader(item, expanded) {
    return (
      <View style={styles.header}>
        <Text style={styles.title}> {item.title}</Text>
        {expanded ? (
          <Icon style={styles.icon} name="remove-circle" />
        ) : (
          <Icon style={styles.icon} name="add-circle" />
        )}
      </View>
    );
  }
  _renderContent(item) {
    return <AccordionItem options={item.list} drawer={'DrawerStoma'} />;
  }
  render() {
    return (
      <Accordion
        style={{borderWidth: 0}}
        dataArray={stomaSideBar}
        animation={true}
        expanded={[-1]}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}

export default connect(mapStateToProps)(MenuAccordion);
/**
 * 
 *       <Accordion
        style={{borderWidth: 0}}
        dataArray={stomaSideBar}
        animation={true}
        expanded={true}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
 */
const styles = StyleSheet.create({
  icon: {fontSize: 18, color: '#5aa324'},
  title: {fontWeight: '600', color: '#ffffff'},
  header: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(17,29,44,0.6)',
    borderRadius: 10,
    marginVertical: 5,
  },
});
