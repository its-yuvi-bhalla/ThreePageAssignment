import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Post = ({ user, profilePic, postImage, likes, caption }) => {
  return (
    <View style={styles.postContainer}>

      <View style={styles.userInfo}>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
        <Text style={styles.username}>{user}</Text>
      </View>

      <Image source={{ uri: postImage }} style={styles.postImage} />

      
      <View style={styles.actions}>
        <TouchableOpacity>
          <Ionicons name="heart" size={24} color="red"/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="paper-plane-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.likes}>{likes} likes</Text>
      <Text style={styles.caption}>
        <Text style={styles.bold}>{user}</Text> {caption}
      </Text>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
    gap: 15,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 10,
  },
  caption: {
    marginLeft: 10,
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
})
