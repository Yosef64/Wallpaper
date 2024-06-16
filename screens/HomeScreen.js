import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
        <Icon name="search" size={28} color="#fff" />
      </View>
      <View style={styles.tabs}>
        {['Movies', 'Poetry', 'Drama', 'Music', 'Documentary'].map(tab => (
          <Text style={[styles.tab, tab === 'Music' && styles.activeTab]} key={tab}>{tab}</Text>
        ))}
      </View>
      <View style={styles.content}>
        {/* Add your content here */}
        <View style={styles.card}>
          <Image style={styles.image} source={{uri: 'image-url'}} />
          <Text style={styles.title}>Pocket 5</Text>
          <Text style={styles.subtitle}>Fred Nuel</Text>
        </View>
        {/* Repeat for other content */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  tab: {
    color: '#ccc',
    fontSize: 16,
  },
  activeTab: {
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    color: '#888',
    fontSize: 14,
    marginTop: 5,
  },
});

export default HomeScreen;
