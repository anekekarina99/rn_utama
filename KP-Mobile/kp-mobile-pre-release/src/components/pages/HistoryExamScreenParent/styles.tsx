import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    // padding: 16,
  },
  capsuleContainer: {
    flexDirection: 'row',
    paddingBottom: 16,
    paddingLeft: 16,
  },
  scrollView: {},
  contentContainerStyle: {
    paddingBottom: 200,
    paddingHorizontal: 16,
  },
  emptyContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyTitle: {
    paddingTop: 12,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.SemiBoldPoppins,
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 1,
    fontWeight: '600',
    textAlign: 'center',
  },
  emptySubTitle: {
    paddingTop: 6,
    color: Colors.dark.neutral60,
    fontFamily: Fonts.RegularPoppins,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 1,
    fontWeight: '400',
    textAlign: 'center',
  },
  unChoose: {
    backgroundColor: Colors.primary.light3,
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  choose: {
    backgroundColor: Colors.primary.base,
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  textUnchoose: {
    fontFamily: 'Poppins-Regular',
    lineHeight: 18,
  },
  textChoose: {
    fontFamily: 'Poppins-Bold',
    lineHeight: 18,
    color: Colors.white,
  },
  textEmptyTitle: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 8,
  },
  textEmptyDesc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: Colors.dark.neutral60,
  },
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
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: '#1D252D',
    marginRight: 5,
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: '#868E96',
  },
  bulletGreen: {
    width: 12,
    height: 12,
    borderRadius: 100,
    backgroundColor: Colors.success.base,
    marginRight: 10,
  },
  bulletRed: {
    width: 12,
    height: 12,
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: Colors.danger.base,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentContainerSwipe: {
    padding: 10,
  },
  contentSwipe: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleSwipe: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    letterSpacing: 0.25,
    color: '#1D252D',
    marginRight: 5,
    textAlign: 'center',
  },
  textBlue: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    letterSpacing: 0.25,
    color: Colors.primary.base,
    marginRight: 5,
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    letterSpacing: 0.25,
    marginRight: 5,
    color: Colors.dark.neutral100,
  },
  list: {
    borderTopWidth: 4,
    margin: 5,
    borderColor: '#F5F7F9',
    padding: 10,
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
  titleCard: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  rowBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.primary.base,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  buttonContainer: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderColor: Colors.primary.base,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 25,
  },
  dikumpulkan: {
    color: Colors.dark.neutral60,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  dateStyle: {
    color: Colors.dark.neutral60,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  nilaiStyle: {
    color: Colors.dark.neutral60,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  belumdinilai: {
    color: Colors.primary.base,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
  sudahdinilai: {
    color: Colors.primary.base,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: '600',
  },
});
