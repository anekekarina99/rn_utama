import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
  },
  contentContainerStyle: {flexGrow: 1},
  infoHeader: {
    flexDirection: 'row',
    backgroundColor: Colors.primary.light3,
    borderRadius: 10,
    padding: 12,
  },
  iconInfo: {
    marginRight: 10,
  },
  textInfo: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.dark.neutral80,
    letterSpacing: 0.25,
    fontFamily: Fonts.RegularPoppins,
  },
  textInfoBold: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
  },
  robotIcon: {
    marginVertical: 16,
    alignSelf: 'center',
  },
  containerTitle: {
    paddingHorizontal: 16,
  },
  textTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.dark.neutral100,
    letterSpacing: 1,
    fontFamily: Fonts.SemiBoldPoppins,
    textAlign: 'center',
    paddingBottom: 4,
  },
  textTitleLeft: {
    textAlign: 'left',
    paddingTop: 12,
    paddingBottom: 8,
  },
  featuresContainer: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
  },
  textFeature: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral100,
    letterSpacing: 0.25,
    fontFamily: Fonts.RegularPoppins,
    paddingLeft: 16,
  },
  textDescription: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral100,
    letterSpacing: 0.25,
    fontFamily: Fonts.RegularPoppins,
    textAlign: 'justify',
  },
  agreementContainer: {
    flexDirection: 'row',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderColor: '#9C9C9C',
    marginBottom: 65,
  },
  agreementText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral100,
    letterSpacing: 0.25,
    fontFamily: Fonts.RegularPoppins,
    paddingLeft: 8,
  },
  agreementTextBlue: {
    color: Colors.primary.base,
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  button: {
    width: '100%',
  },
  maskotIcon: {
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.dark.neutral100,
    fontWeight: '400',
    fontFamily: Fonts.SemiBoldPoppins,
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral100,
    fontWeight: '400',
    fontFamily: Fonts.RegularPoppins,
    textAlign: 'center',
    marginBottom: 20,
    alignSelf: 'center',
    paddingTop: 6,
  },
  otpContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  cTimer: {
    alignSelf: 'center',
    marginBottom: 4,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resendTitle: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.dark.neutral80,
    fontWeight: '600',
    fontFamily: Fonts.RegularPoppins,
  },
  goodByeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  goodByeCenter: {
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGoodBye: {
    marginTop: 20,
    width: '100%',
  },
  goodByeTitle: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    letterSpacing: 1,
    textAlign: 'center',
  },
  goodByeLabel: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    fontFamily: Fonts.RegularPoppins,
    letterSpacing: 0.25,
    textAlign: 'center',
    paddingTop: 6,
  },
  wrap: {flexWrap: 'wrap'},
});
