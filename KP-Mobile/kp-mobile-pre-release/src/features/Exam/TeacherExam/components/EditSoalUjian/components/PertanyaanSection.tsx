import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styles from '../styles'

const PertanyaanSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Pertanyaan</Text>
      
      <View style={styles.toolbarContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name='bold' size={16} color='#A3A3A3' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name='italic' size={16} color='#A3A3A3' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name='underline' size={16} color='#A3A3A3' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name='list-ul' size={16} color='#A3A3A3' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name='list-ol' size={16} color='#A3A3A3' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name='link' size={16} color='#A3A3A3' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name='image' size={16} color='#A3A3A3' />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Tulis opsi jawaban'
          multiline
        />
        <TouchableOpacity style={styles.mathTypeButton}>
          <Text style={styles.mathTypeText}>∑ Math Type</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addMediaButton}>
        <Text style={styles.addMediaText}>+ Tambah Media</Text>
      </TouchableOpacity>
    </View>
  )
}

export default PertanyaanSection