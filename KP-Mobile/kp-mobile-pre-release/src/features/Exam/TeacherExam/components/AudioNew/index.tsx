import React, { useEffect } from 'react';
import SoundPlayer from 'react-native-sound-player';
import {
  View,
  StyleSheet,
  Slider,
  Text,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AudioP = () => {
  useEffect(() => {
    const onFinishedPlayingSubscription = DeviceEventEmitter.addListener(
      'FinishedPlaying',
      ({ success }) => {
        console.log('Finished playing', success);
      }
    );

    return () => {
      onFinishedPlayingSubscription.remove();
    };
  }, []);

  const playSound = () => {
    try {
      SoundPlayer.playSoundFile('my_sound', 'mp3');
    } catch (e) {
      console.log(`Tidak dapat memutar suara karena: ${e}`);
    }
  };

  const stopSound = () => {
    SoundPlayer.stop();
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <TouchableOpacity onPress={playSound}>
          <Icon name="play-arrow" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={stopSound}>
          <Icon name="pause" size={30} color="white" />
        </TouchableOpacity>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={50} // Example current value
          onValueChange={(value) => console.log(value)} // Example handler
        />
        <Text style={styles.time}>
          {formatTime(50)} / {formatTime(100)} {/* Example time */}
        </Text>
        <TouchableOpacity onPress={() => console.log('Delete pressed')}>
          <Icon name="delete" size={30} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AudioP;
