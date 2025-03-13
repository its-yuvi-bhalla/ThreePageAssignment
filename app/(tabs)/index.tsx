import { View, FlatList, Text, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Story from '../../components/Story.jsx'
import Post from '../../components/Post.jsx'

const stories = [
  { id: '1', name: 'Your Story', image: 'https://picsum.photos/300' },
  { id: '2', name: 'John', image: 'https://picsum.photos/200' },
  { id: '3', name: 'Sarah', image: 'https://picsum.photos/400' },
]

const posts = [
  { 
    id: '1', 
    user: 'John', 
    profilePic: 'https://picsum.photos/200',
    postImage: 'https://picsum.photos/500', 
    likes: 120, 
    caption: 'Beautiful day! #foggy' 
  },
  { 
    id: '2', 
    user: 'Sarah', 
    profilePic: 'https://picsum.photos/400',
    postImage: 'https://picsum.photos/600', 
    likes: 98, 
    caption: 'Love the Speed! ' 
  },
]

const HomeScreen = () => {
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>
      <ScrollView>
      <View style={{flexDirection:'row'}}>
        <Story name={stories[0].name} image={stories[0].image} />
        <Story name={stories[1].name} image={stories[1].image} />
        <Story name={stories[2].name} image={stories[2].image} />
        <Story name={stories[1].name} image={stories[1].image} />
        <Story name={stories[2].name} image={stories[2].image} />        
      </View>
      <Post 
            user={posts[0].user} 
            profilePic={posts[0].profilePic}
            postImage={posts[0].postImage} 
            likes={posts[0].likes} 
            caption={posts[0].caption} 
          />
        <Post 
            user={posts[1].user} 
            profilePic={posts[1].profilePic}
            postImage={posts[1].postImage} 
            likes={posts[1].likes} 
            caption={posts[1].caption} 
          />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  post: {
    marginBottom: 20,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'left',
    paddingLeft: 10,
    paddingBottom: 10,

  },
})

export default HomeScreen
