import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingBottom: 16,
    backgroundColor: Colors.white,
  },
  videoContainerStyle: {
    justifyContent: 'flex-start',
    backgroundColor: Colors.dark.neutral40,
  },
  videoContainer: {
    backgroundColor: Colors.white,
    justifyContent: 'flex-start',
  },
  videoStyle: {
    height: 255,
    alignItems: 'flex-start',
  },
  padding16: {padding: 16},
  fontSize20: {fontSize: 20},
  ml20: {marginLeft: 20},
  width90p: {width: '90%'},
  agreementtext: {textAlign: 'center', marginVertical: 10},
  titlePractice: {fontSize: 16, marginHorizontal: 10},
  titleTest: {fontSize: 16, marginHorizontal: 10},
  videoStyle2: {
    justifyContent: 'center',
    backgroundColor: Colors.dark.neutral50,
  },
  buttonTimeContainer: {flex: 1, padding: 16},
  width70p: {width: '70%'},
  padding10: {padding: 10},
  iconFullscreenContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  width80p: {width: '80%'},
  padding0: {padding: 0},
  fastImageContainer: {flexDirection: 'row', marginTop: 10},
  alignSelfCenter: {alignSelf: 'center'},
  opacity0: {opacity: 0},
  opacity100: {opacity: 100},
  flexRow: {flexDirection: 'row'},
  slider: {
    width: '100%',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.01,
    color: Colors.dark.neutral100,
    width: '75%',
  },
  titleGrey: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.01,
    color: Colors.dark.neutral80,
  },
  headerContent: {
    paddingHorizontal: 16,
    marginBottom: 20,
    marginTop: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    flex: 1,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: Colors.dark.neutral100,
  },
  contentContainer: {},
  switch: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  pp: {
    width: 32,
    height: 32,
    borderRadius: 100,
    marginRight: 8,
  },
  buttonSwtich: {
    width: '50%',
    height: 32,
    justifyContent: 'center',
  },
  textSwitch: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: 0.25,
  },
  lineActive: {
    width: '50%',
    borderWidth: 4,
    borderColor: Colors.primary.base,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  controlMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '100%',
  },
  time: {
    fontFamily: 'Poppins-Regular',
    color: Colors.white,
    fontSize: 12,
    marginLeft: 10,
  },
  lineDeactive: {
    width: '50%',
    borderWidth: 1,
    borderColor: Colors.dark.neutral40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    paddingRight: '15%',
    alignItems: 'center',
  },
  thumbail: {
    width: 80,
    height: 44,
    backgroundColor: Colors.dark.neutral20,
    borderRadius: 10,
  },
  textList: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 18,
    marginHorizontal: 5,
    color: Colors.dark.neutral100,
  },
  play: {
    alignSelf: 'center',
  },
  next: {
    marginHorizontal: 10,
  },
  control: {
    width: '100%',
    position: 'absolute',
    height: '100%',
    justifyContent: 'flex-start',
  },
  setting: {
    position: 'absolute',
    marginVertical: 20,
    right: 5,
  },
  settingList: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#E7EBEE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controlContainer: {
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000080',
  },
  animatedContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  sliderContainer: {
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100%',
  },
  fullscreenVideo: {
    height: '100%',
    alignItems: 'flex-start',
    width: '100%',
  },
  modalList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accordion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textAccordionChoosen: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
    color: Colors.primary.base,
  },
  textAccordion: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
    color: '#1D252D',
  },
  contentCircle: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCircle: {
    width: 100,
    height: 100,
  },
  outerCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#3498db',
    borderStyle: 'solid',
    transform: [{rotate: '-90deg'}],
    backgroundColor: 'transparent',
    position: 'absolute',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#3498db',
    borderTopColor: '#3498db',
    borderLeftWidth: 35,
    borderTopWidth: 35,
  },
  extraContent: {
    padding: 10,
    borderTopWidth: 5,
    borderColor: '#F5F7F9',
  },
  containerFloat: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 50,
  },
  floatButton: {
    backgroundColor: Colors.primary.base,
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textFloat: {
    color: Colors.white,
    fontSize: 14,
    marginHorizontal: 10,
    fontFamily: 'Poppins-Bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  subContainer: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  subTitle: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontSize: 12,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.25,
    color: '#868E96',
    marginVertical: 5,
  },
  titleSwipe: {
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'Poppins-Bold',
    color: Colors.dark.neutral100,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    height: 56,
    width: '47%',
    backgroundColor: Colors.primary.light3,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
