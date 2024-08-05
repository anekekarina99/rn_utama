import style from '@components/atoms/Avatar/style';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    padding: 10,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    width: '60%',
  },
  time: {
    color: 'white',
  },
});

export default style;