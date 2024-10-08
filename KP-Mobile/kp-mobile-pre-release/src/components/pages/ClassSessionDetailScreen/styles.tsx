import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');
export const styles = StyleSheet.create({
  textAccordionChoosen: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
    color: Colors.primary.base,
  },
  fullscreenVideo: {
    height: '100%',
    alignItems: 'flex-start',
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
  container: {
    padding: 16,
    backgroundColor: Colors.white,
  },
  chips: {
    backgroundColor: Colors.primary.light3,
    borderRadius: 20,
    marginTop: -10,
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  chipsText: {
    fontFamily: Fonts.RegularPoppins,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: Colors.primary.base,
    fontWeight: '400',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  subjectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftSubjectContainer: {
    flexDirection: 'column',
  },
  subjectName: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: Colors.dark.neutral80,
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
  },
  subjectTitle: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.1,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    paddingVertical: 4,
  },
  subjectDate: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
  },
  rectangle: {
    marginVertical: 16,
    width: window.width,
    height: 4,
    backgroundColor: Colors.dark.neutral10,
    marginHorizontal: -16,
  },
  descriptionContainer: {
    flexDirection: 'column',
  },
  descriptionTitle: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    fontFamily: Fonts.SemiBoldPoppins,
    color: Colors.dark.neutral100,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    fontFamily: Fonts.RegularPoppins,
    color: Colors.dark.neutral100,
    fontWeight: '400',
    paddingTop: 4,
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTitleText: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    fontFamily: Fonts.SemiBoldPoppins,
    color: Colors.dark.neutral100,
    fontWeight: '600',
  },
  userName: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    fontFamily: Fonts.RegularPoppins,
    color: Colors.dark.neutral100,
    fontWeight: '400',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 16,
    width: window.width * 0.95,
    alignSelf: 'center',
  },

  //video
  videoContainerStyle: {
    justifyContent: 'flex-start',
    marginBottom: 16,
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
  slider: {
    width: '100%',
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
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    alignItems: 'flex-start',
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
    padding: 5,
    borderBottomWidth: 1,
    borderColor: Colors.dark.neutral50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  controlContainer: {
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  sliderContainer: {
    justifyContent: 'flex-end',
    position: 'absolute',
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
  textAccordion: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
  },
  textRatingUser: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
  },
  textRatingNumber: {
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.1,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
  },
});
