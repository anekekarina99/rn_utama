import React from 'react'; // Mengimpor React
import {View} from 'react-native'; // Mengimpor View dari React Native
import {Ionicons} from '@expo/vector-icons'; // Mengimpor Ionicons untuk penggunaan ikon
import PoppinsText from './PoppinsTexts'; // Mengimpor komponen kustom PoppinsText
import {styles} from '../styles'; // Mengimpor gaya dari file style lokal

export const CardComponent = () => {
  // Mendefinisikan komponen fungsional CardComponent
  return (
    <View style={styles.container}>
      {' '}
      {/* Kontainer utama untuk kartu dengan styling */}
      <View style={styles.nilaiContainer}>
        {' '}
        {/* Kontainer untuk menampilkan nilai */}
        <PoppinsText style={styles.nilai}>Nilai</PoppinsText>
        <PoppinsText weight="SemiBold" style={styles.value}>
          89
        </PoppinsText>
      </View>
      <View style={styles.statsContainer}>
        {' '}
        {/* Kontainer untuk menampilkan statistik */}
        <View style={styles.stats}>
          <PoppinsText weight="SemiBold" style={styles.correct}>
            8
          </PoppinsText>
          <PoppinsText style={styles.correctLabel}>Benar</PoppinsText>
        </View>
        <View style={styles.stats}>
          <PoppinsText weight="SemiBold" style={styles.wrong}>
            2
          </PoppinsText>
          <PoppinsText style={styles.wrongLabel}>Salah</PoppinsText>
        </View>
        <View style={styles.stats}>
          <PoppinsText weight="SemiBold" style={styles.skipped}>
            0
          </PoppinsText>
          <PoppinsText style={styles.skippedLabel}>Dilewati</PoppinsText>
        </View>
      </View>
      <View style={styles.divider} /> {/* Garis pembatas */}
      <View style={styles.infoContainer}>
        {' '}
        {/* Kontainer untuk informasi tambahan */}
        <PoppinsText style={styles.duration}>
          Durasi Pengerjaan:
          <Ionicons name="time-outline" size={16} style={styles.icon} />
          <PoppinsText weight="SemiBold" style={styles.timeText}>
            14 menit
          </PoppinsText>
        </PoppinsText>
        <PoppinsText style={styles.date}>
          Tanggal Ujian: Senin, 4 Jul 2022 • 08:00
        </PoppinsText>
      </View>
    </View>
  );
};
