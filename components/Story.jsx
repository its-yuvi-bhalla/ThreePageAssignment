import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Story = ({ name, image }) => {
  return (
    <View style={styles.story}>
      <Image source={{ uri: image }} style={styles.storyImage} />
      <Text style={styles.storyText}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  story: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'red',
  },
  storyText: {
    fontSize: 12,
    marginTop: 5,
  },
})

export default Story
