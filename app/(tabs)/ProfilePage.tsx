import React from 'react'
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, Dimensions, TouchableOpacity } from 'react-native'

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
]

const screenWidth = Dimensions.get('window').width
const imageSize = screenWidth / 3 - 2

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <Image source={{ uri: item.url }} style={styles.image} />}
        contentContainerStyle={styles.gridContainer}
        ListHeaderComponent={
          <>
            {/* Header Section */}
            <View style={styles.header}>
              <Image
                source={{ uri: 'https://picsum.photos/200' }}
                style={styles.profileImage}
                onError={(e) => console.log('Image failed to load:', e.nativeEvent.error)}
              />
              <View style={styles.userInfo}>
                <Text style={styles.username}>John Doe</Text>
                <View style={styles.statsContainer}>
                  <View style={styles.statItem}>
                    <Text style={styles.statNumber}>120</Text>
                    <Text style={styles.statLabel}>Posts</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statNumber}>10K</Text>
                    <Text style={styles.statLabel}>Followers</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statNumber}>500</Text>
                    <Text style={styles.statLabel}>Following</Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Bio Section */}
            <Text style={styles.bio}>React Native Developer | Tech Enthusiast 🚀</Text>

            {/* Edit Profile & Share Profile Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.editProfileButton}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareProfileButton}>
                <Text style={styles.buttonText}>Share Profile</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
    paddingBottom: 10,
  },
  editProfileButton: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 5,
  },
  shareProfileButton: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
    paddingBottom: 10,
  },
  gridContainer: {
    paddingTop: 10,
  },
  image: {
    width: imageSize,
    height: imageSize,
    margin: 1,
  },
})

export default ProfileScreen
