import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment/min/moment-with-locales';
import DatePicker from 'react-native-datepicker';

export default class FechaEntrega extends Component {
  constructor(props) {
    super(props);
    this.state = {date: moment().format('YYYY-MM-DD')};
  }

  setDate(date) {
    this.setState({
      date: date,
    });
    this.props.function(date);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={{letterSpacing: 2}}>
            Proporciona una fecha de entrega
          </Text>
        </View>
        <View>
          <DatePicker
            style={{width: 150, margin: 10}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            androidMode="spinner"
            format="YYYY-MM-DD"
            minDate="2000-01-01"
            maxDate="3000-01-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={date => {
              this.setDate(date);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    flex: 1,
    width: '100%',
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#D8D3D3',
    marginBottom: 10,
    alignItems: 'center',
  },
  container: {flex: 1, width: '100%', paddingBottom: 10},
  containerStyle: {
    borderRadius: 20,
  },
});
