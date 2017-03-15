/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SortableListView from 'react-native-sortable-listview';
import RowComponent from './RowComponent';

let data = {
  1: {id:1, text: 'FEED 1'},
  2: {id:2, text: 'FEED 2'},
  3: {id:3, text: 'FEED 3'},
  4: {id:4, text: 'FEED 4'},
  5: {id:5, text: 'FEED 5'},
}
let order = Object.keys(data); //Array of keys

export default class sortable_listview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SortableListView
            style={{flex: 1, marginTop:30}}
            data={data}
            order={order}
            disableSorting={true}
            onRowMoved={e => {
              order.splice(e.to, 0, order.splice(e.from, 1)[0]);
              this.forceUpdate();
            }}
            renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  renderRow(rowData) {
    return (
      <RowComponent
        {...rowData}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sortable_listview', () => sortable_listview);
