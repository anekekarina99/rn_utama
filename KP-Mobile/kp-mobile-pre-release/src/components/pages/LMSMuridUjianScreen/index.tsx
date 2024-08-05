import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LMSMuridUjianScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Halo dari LMSMuridUjianScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LMSMuridUjianScreen;