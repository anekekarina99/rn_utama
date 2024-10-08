import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
    paddingBottom: 0,
  },
  BtnContainer: {
    justifyContent: 'space-around',
    paddingBottom: 16,
    marginTop: 16,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  middleContainer: {
    flexDirection: 'column',
    marginBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchNotFoundContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,
    width: '85  %',

    alignSelf: 'center',
  },
  searchTipsOrNotFound: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchTipsOrNotFoundTitle: {
    marginTop: 12,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: 'center',
    color: Colors.dark.neutral100,
  },
  searchTipsOrNotFoundDescription: {
    marginTop: 6,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: Colors.dark.neutral60,
  },
  swipeUpContainerSoal: {
    backgroundColor: Colors.white,
  },
  swpTopContent: {
    padding: 16,
    paddingTop: 0,
  },
  rectangle: {
    backgroundColor: Colors.dark.neutral10,
    height: 4,
    marginVertical: '8%',
    width: '100%',
    padding: 0,
  },
  swpMiddleContent3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  soalSubContent: {
    flexDirection: 'column',
    width: '70%',
    marginBottom: '4%',
  },
  soalTitle: {
    marginLeft: '4%',
    fontFamily: 'Poppins-SemiBold',
    color: Colors.dark.neutral100,
    fontSize: 14,
    lineHeight: 22,
  },
  soalText: {
    marginLeft: '4%',
    fontFamily: 'Poppins-Regular',
    color: Colors.dark.neutral80,
    fontSize: 12,
    lineHeight: 16,
  },
  swpBottomContentSoal: {
    marginHorizontal: 32,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  SoalButton: {
    width: '55%',
    marginHorizontal: '2%',
  },
  swpMiddleContentSoal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  swpTopTitle2Container: {alignItems: 'center'},
  swpTopTitle: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.dark.neutral100,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
    paddingBottom: 8,
    alignSelf: 'center',
  },
  swpSubTitle: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: Colors.dark.neutral60,
  },
  chips: {
    backgroundColor: Colors.primary.light3,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 4,
    alignSelf: 'flex-end',
    marginRight: 8,
    marginVertical: 16,
  },
  chipsText: {
    fontFamily: Fonts.RegularPoppins,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.primary.base,
    fontWeight: '400',
    textAlign: 'center',
  },

  dateContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  dateItem: {
    width: '49%',
  },
  dateText: {
    fontFamily: Fonts.SemiBoldPoppins,
    color: Colors.dark.neutral100,
    width: '90%',
  },
  dateContainerText: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
    backgroundColor: Colors.primary.light4,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleDate: {
    fontFamily: 'Poppins-Bold',
    color: Colors.dark.neutral60,
    fontSize: 14,
  },
  titleBlue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: Colors.primary.base,
  },
  itemTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    marginBottom: 8,
  },
  calendar: {
    flexDirection: 'column',
    height: 150,
  },
  transactionText: {
    fontFamily: 'Roboto-Mono',
    fontWeight: '400',
    lineHeight: 18,
    fontSize: 12,
    textAlign: 'center',
    paddingBottom: 4,
    color: Colors.black,
  },
  selectAll: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.primary.base,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    letterSpacing: 0.25,
    paddingRight: 8,
  },
  showLess: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    fontWeight: '600',
    color: Colors.dark.neutral60,
    fontFamily: Fonts.SemiBoldPoppins,

    marginHorizontal: 12,
  },
  notFoundContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  notFoundLabel: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    letterSpacing: 1,
    fontSize: 16,
    lineHeight: 20,
    paddingTop: 12,
    color: Colors.dark.neutral100,
    textAlign: 'center',
  },
  notFoundText: {
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    letterSpacing: 1,
    fontSize: 14,
    lineHeight: 18,
    paddingTop: 6,
    color: Colors.dark.neutral100,
    textAlign: 'center',
  },
  svStyle: {
    maxHeight: 400,
  },
});
