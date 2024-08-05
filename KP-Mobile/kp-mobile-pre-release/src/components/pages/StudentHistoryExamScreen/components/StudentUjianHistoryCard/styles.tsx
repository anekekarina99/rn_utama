import {StyleSheet} from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';

export default StyleSheet.create({
  container: {},
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    margin: 4,
  },
  chipsFont: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.primary.base,
    alignSelf: 'flex-start',
  },
  chipsContainer: {
    backgroundColor: Colors.primary.light3,
    alignSelf: 'flex-start',
  },
  rowBetween: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.primary.base,
    fontFamily: Fonts.SemiBoldPoppins,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderColor: Colors.primary.base,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 25,
  },
  dikumpulkan: {
    color: Colors.dark.neutral60,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    fontWeight: '400',
  },
  dateStyle: {
    color: Colors.dark.neutral80,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    fontWeight: '400',
    paddingTop: 4,
  },
  nilaiStyle: {
    color: Colors.dark.neutral60,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    fontWeight: '400',
  },
  belumdinilai: {
    color: Colors.dark.neutral80,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    fontWeight: '400',
    paddingTop: 4,
  },
  sudahdinilai: {
    color: Colors.primary.base,
    fontFamily: Fonts.SemiBoldPoppins,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    fontWeight: '600',
    paddingTop: 4,
  },
  subjectCard: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    fontWeight: '400',
  },
  titleCard: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18,
    color: Colors.dark.neutral100,
    letterSpacing: 0.25,
    paddingTop: 4,
  },
});