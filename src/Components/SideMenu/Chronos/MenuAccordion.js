import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {AccordionItem} from '../index';
import {chronosSideBar} from '../../../Constants/data';
import {Accordion} from 'native-base';
import {Plus, Minus} from '../../../Constants/Icons/design';
const mapStateToProps = state => ({
  state: state,
  selected: state.selectedProduct.selected.title,
});
class MenuAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props.selected);
  }
  _renderHeader(item, expanded) {
    return (
      <View style={styles.header}>
        <Text style={styles.title}> {item.title}</Text>
        {expanded ? (
          <Minus width={20} height={20} />
        ) : (
          <Plus width={20} height={20} />
        )}
      </View>
    );
  }
  _renderContent(item) {
    return <AccordionItem options={item.list} drawer={'DrawerChronos'} />;
  }
  render() {
    return (
      <Accordion
        style={{borderWidth: 0}}
        dataArray={chronosSideBar}
        animation={true}
        expanded={[-1]}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}
export default connect(mapStateToProps)(MenuAccordion);

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
