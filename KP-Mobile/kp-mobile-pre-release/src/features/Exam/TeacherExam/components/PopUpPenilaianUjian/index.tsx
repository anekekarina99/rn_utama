import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { useFonts } from './Poppins';
import styles from './styles';

const PopUpPenilaianUjian = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const [fontsLoaded] = useFonts();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  if (!fontsLoaded) {
    return null; // Instead of AppLoading, return null to keep it simple
  }

  return (
    <View style={styles.container}>
      <Button title='Show Popup' onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        useNativeDriver>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>

          <Image
            source={require('./assets/Robot.svg')}
            style={styles.robotIcon}
          />
          <Text style={styles.title}>Kumpulkan Nilai Ujian</Text>
          <Text style={styles.message}>
            Ketika selesai dikumpulkan, nilai akan dibagikan ke murid
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.reviewButton} onPress={toggleModal}>
              <Text style={styles.reviewText}>Periksa Ulang</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.submitButton} onPress={toggleModal}>
              <Text style={styles.submitText}>Kumpulkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopUpPenilaianUjian;
