import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Linking, Image, Text} from 'react-native';
import {width} from '../../Constants/styles';
import {Divider} from 'react-native-elements';
import Stoma1 from '../../Assets/Img/FichasTecnicas/Stoma/stoma1.png';
import Stoma2 from '../../Assets/Img/FichasTecnicas/Stoma/stoma2.png';
import Stoma3 from '../../Assets/Img/FichasTecnicas/Stoma/stoma3.png';
import Stoma4 from '../../Assets/Img/FichasTecnicas/Stoma/stoma4.png';
import {Button} from '../../Components/Logos';

export default class Stoma extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  openFile() {
    Linking.openURL('http://161.35.105.244/ficha/stoma.pdf');
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imgs}>
            <Image source={Stoma1} style={styles.stoma1} />
            <Image source={Stoma2} style={styles.stoma2} />
            <Image source={Stoma3} style={styles.stoma3} />
            <Image source={Stoma4} style={styles.stoma4} />
          </View>
          <View style={styles.footer}>
            <Divider style={styles.dividerBot} />
            <Text style={styles.download}>Descarga la ficha técnica!</Text>
            <Button press={this.openFile.bind(this)} text={'DESCARGAR'} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f7f7f1'},
  imgs: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 'auto',
    backgroundColor: '#f7f7f1',
  },
  stoma1: {
    width: width - 20,
    height: 470,
    resizeMode: 'contain',
    margin: 0,
  },
  stoma2: {
    width: width - 20,
    height: 200,
    resizeMode: 'contain',
    margin: 0,
  },
  stoma3: {
    width: width - 20,
    height: 190,
    resizeMode: 'contain',
  },
  stoma4: {
    width: width,
    height: 300,
    resizeMode: 'contain',
  },

  footer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    width: width,
  },
  download: {fontSize: 15, fontStyle: 'italic'},
  dividerBot: {backgroundColor: 'grey', width: '100%', marginBottom: 20},
});
