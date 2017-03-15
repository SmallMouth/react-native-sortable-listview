import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


export default class RowComponent extends Component {

  render() {
    let sortHandlers =  {...this.props.sortHandlers} ;
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={styles.item}
        {...sortHandlers}
        onPress={this.props.onPress}>
        <View  style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item:{
    padding: 12,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  tab:{
    height: 33,
    flexDirection: 'row'
  },
  tabButtonText:{
    textAlign: 'center',
    color: 'white'
  }
});
