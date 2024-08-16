import React from 'react'; // Mengimpor React
import {View} from 'react-native'; // Mengimpor View dari React Native
import PoppinsText from './PoppinsTexts'; // Mengimpor komponen kustom PoppinsText
import {styles} from '../styles'; // Mengimpor gaya dari file style lokal

export const HeaderComponent = () => {
  // Mendefinisikan komponen fungsional HeaderComponent
  return (
    <>
      <View>
        {' '}
        {/* Kontainer untuk bar atas */}
        <View /> {/* Styling untuk bar atas */}
      </View>
      <PoppinsText weight="Bold" style={styles.header}>
        Ujian Tengah Semester • Matematika
      </PoppinsText>
      <PoppinsText weight="SemiBold" style={styles.title}>
        Ulangan Harian Pola Bilangan
      </PoppinsText>
    </>
  );
};
