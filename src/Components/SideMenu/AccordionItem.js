import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  state: state,
});
class AccordionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.options = this.props.options;
  }
  render() {
    return (
      <View style={styles.container}>
        {this.options.map((datos, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navSectionStyle}
            onPress={() => {
              this.props.navRedux.navigate(datos.screen, {
                screen: datos.route,
              });
            }}>
            <View style={{flex: 1}}>
              <Text style={styles.navItemStyle}>{datos.title}</Text>
            </View>
            <View style={styles.icon}>
              <datos.Icon />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
export default connect(mapStateToProps)(AccordionItem);
const styles = StyleSheet.create({
  container: {width: '100%'},
  navItemStyle: {
    fontSize: 15,
    color: 'white',
    marginLeft: 20,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  navSectionStyle: {
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(68,140,36,0.5)',
    margin: 5,
  },
  icon: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111d2c',
    padding: 10,
  },
});
