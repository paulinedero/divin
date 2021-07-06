/* eslint-disable react/prop-types */
import * as React from 'react';
import { FlatList } from 'react-native';
import FarmersCard from './FarmersCard';

const renderItem = ({ item }) => (
  <FarmersCard
    name={item.name.last}
    firstName={item.name.first}
    picture={item.picture.thumbnail}
    email={item.email}
    city={item.city}
  />
);

export default function FarmersListScreen(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={(item) => item.email}
    />
  );
}
