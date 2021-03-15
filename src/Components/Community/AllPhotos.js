import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {ImageCard} from './index';
import {Reload} from '../../Constants/Icons/design';

export default class AllPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: [],
    };
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            this.props.getPhotos();
          }}
          style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
          <Reload style={{width: 25, height: 25}} />
          <Text>Volver a cargar!</Text>
        </TouchableOpacity>
        {this.state.url && (
          <View style={{flex: 1, backgroundColor: '#f8f6f7'}}>
            {this.props.url.map((image, index) => (
              <View style={styles.imageV} key={index}>
                {image && <ImageCard uri={image} />}
                {!image && (
                  <ActivityIndicator size={'small'} color={'lightgrey'} />
                )}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageV: {
    flex: 1,
    padding: 10,
    width: '100%',
    height: 'auto',
  },
});
