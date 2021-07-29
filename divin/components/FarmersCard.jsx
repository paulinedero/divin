import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

// API
import api from '../utils/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  optionList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: '#FE984E',
    marginBottom: 30,
  },
  items: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  heart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 18,
    backgroundColor: 'lightgrey',
  },
  primaryText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginBottom: 4,
  },
  secondaryText: {
    color: 'grey',
  },
});

// This component was created to render a template for farmer's card
export default class FarmersCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSources: [],
    };
  }

  componentDidMount() {
    api.axios
      .get(`${api.apiUrl}/farmers/`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          isLoading: false,
          dataSources: data,
        });
      });
  }

  // Separator in farmers'list
  renderSeparator = () => (
    <View
      style={{
        backgroundColor: 'grey',
        height: 0.5,
      }}
    />
  );

  // Render template farmer's card
  renderItem = ({ item }) => (
    <ScrollView>
      <View style={styles.row1}>
        <TouchableOpacity style={styles.row} onPress={() => { }}>
          <Image style={styles.picture} source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }} />
          <View style={styles.item}>
            <View style={styles.heart}>
              <Text>{`${item.lastname} ${item.firstname}`}</Text>
            </View>
            <Text style={styles.secondaryText}>{item.company_name}</Text>
            <Text style={styles.secondaryText}>{item.email}</Text>
          </View>
        </TouchableOpacity>
        {/*
        <FormGroup row>
          <FormControlLabel
            control={(
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite style={{ color: '#FE984E' }} />}
                name="checkedH"

              />
            )}
          />
        </FormGroup>
        */}
      </View>
    </ScrollView>
  )

  render() {
    const { dataSources, isLoading } = this.state;
    if (isLoading) {
      // Loading animation
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" animating />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={dataSources}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
