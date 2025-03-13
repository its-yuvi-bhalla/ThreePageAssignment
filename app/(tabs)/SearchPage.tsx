import { View, TextInput, StyleSheet, SafeAreaView, Image, FlatList, Dimensions } from 'react-native'
import React from 'react'

const images = [
  { id: '1', url: 'https://picsum.photos/400' },
  { id: '2', url: 'https://picsum.photos/500' },
  { id: '3', url: 'https://picsum.photos/600' },
  { id: '4', url: 'https://picsum.photos/800' },
  { id: '5', url: 'https://picsum.photos/900' },
  { id: '6', url: 'https://picsum.photos/100' },
  { id: '7', url: 'https://picsum.photos/700' },
  { id: '8', url: 'https://picsum.photos/100' },
  { id: '9', url: 'https://picsum.photos/1000' },
  { id: '10', url: 'https://picsum.photos/1100' },
  { id: '11', url: 'https://picsum.photos/200/100' },
  { id: '12', url: 'https://picsum.photos/400/200' },
  { id: '13', url: 'https://picsum.photos/200' },
  { id: '14', url: 'https://picsum.photos/300' },
  { id: '15', url: 'https://picsum.photos/700' },
]

const screenWidth = Dimensions.get('window').width
const imageSize = screenWidth / 3 - 2

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <Image source={{ uri: item.url }} style={styles.image} />}
        contentContainerStyle={styles.gridContainer}
        ListHeaderComponent={
          <View style={styles.searchContainer}>
            <TextInput placeholder="Search" placeholderTextColor={'black'} style={styles.input} />
          </View>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: '#bbbcbd',
  },
  gridContainer: {
    paddingHorizontal: 2,
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 1,
  },
})

export default SearchScreen
