import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';

const App = () => {
  const [items, setItems] = useState([
    {id: '0001', text: 'Milk'},
    {id: '0002', text: 'Eggs'},
    {id: '0003', text: 'Bread'},
    {id: '0004', text: 'Juice'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
