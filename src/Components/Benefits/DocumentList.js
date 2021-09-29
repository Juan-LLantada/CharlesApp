import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import {elevation5} from '../../Constants/styles';
import {Pdf} from '../../Constants/Icons/design';
const mapStateToProps = state => ({
  navRedux: state.navRedux.navRedux,
  selected: state.selectedProduct.selected,
});
class DocumentList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.list = this.props.list;
  }
  OpenURLButton = async url => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      fileError();
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.list.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => this.OpenURLButton(item.url)}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.footer}>
              <View style={styles.pdf}>
                <Pdf width={30} height={30} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
export default connect(mapStateToProps)(DocumentList);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  itemContainer: {
    width: '100%',
    borderRadius: 10,
    ...elevation5,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleView: {
    flex: 3,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderLeftWidth: 0.5,
    borderColor: 'grey',
    borderBottomRightRadius: 10,
    padding: 10,
  },
  title: {
    color: 'grey',
  },
  pdf: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
