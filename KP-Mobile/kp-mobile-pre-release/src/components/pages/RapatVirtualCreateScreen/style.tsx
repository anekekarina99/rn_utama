import {StyleSheet} from 'react-native';

import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  // BEGIN GLOBAL
  row: {
    flexDirection: 'row',
  },
  MB_24: {
    marginBottom: 24,
  },
  MB_74: {
    marginBottom: 74,
  },
  MT_8: {
    marginTop: 8,
  },

  containerBottomShadow: {
    position: 'absolute',
    bottom: 10,
    width: windowWidth,
    textAlign: 'center',
    padding: 16,
    borderTopWidth: 0.5,
    borderTopColor: Colors.dark.neutral40,
    backgroundColor: Colors.white,
  },
  titleInputForm: {
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
  },
  swipeUpContentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  outterDotActive: {
    borderRadius: 25,
    width: 24,
    height: 24,
    backgroundColor: Colors.primary.base,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  outterDotPassive: {
    borderRadius: 25,
    width: 24,
    height: 24,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.dark.neutral50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  innerDot: {
    position: 'absolute',
    borderRadius: 25,
    width: 8,
    height: 8,
    backgroundColor: Colors.white,
  },
  descriptionSwipeUpActive: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.primary.base,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
  },
  descriptionSwipeUpPasive: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.dark.neutral60,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
  },
  formSelectButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: Colors.dark.neutral10,
    borderRadius: 30,
    justifyContent: 'space-between',
  },
  formSelectTextButton: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colors.dark.neutral100,
  },
  swipeUpContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  swipeUpTitle: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 28,
    letterSpacing: 1,
    textAlign: 'center',
    color: Colors.dark.neutral100,
    marginBottom: 16,
  },
  swipeUpDataContainer: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  valueSwipeUp: {
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colors.dark.neutral100,
    maxWidth: '85%',
  },
  inputText: {
    fontSize: 16,
    // lineHeight: 24,
    letterSpacing: 0.1,
    // height: 44,
    backgroundColor: Colors.dark.neutral10,
  },
  textError: {
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: Colors.danger.base,
    marginTop: 8,
  },
  uploadButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.primary.light3,
  },
  uploadTitle: {
    color: Colors.primary.base,
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
  },
  swipeUpUpload: {
    padding: 16,
  },
  swipeUpUploadHeaderTitle: {
    fontSize: 20,
    lineHeight: 28,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    marginBottom: 16,
    textAlign: 'center',
  },
  swipeUpUploadContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  swipeUpUploadLabel: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.dark.neutral100,
    fontWeight: '400',
    fontFamily: Fonts.RegularPoppins,
  },
  imageBackground: {
    borderRadius: 10,
    resizeMode: 'cover',
  },
  attachmentImageContainer: {
    height: 184,
    width: '100%',
    padding: 8,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  iconClose: {
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 25,
    alignSelf: 'flex-end',
  },
  attachmentResendContainer: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.primary.light3,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  attachmentResendTitle: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.primary.base,
    fontFamily: Fonts.SemiBoldPoppins,
  },
  additionalContentText: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    textAlign: 'center',
    color: Colors.dark.neutral80,
  },
  listItem: {
    backgroundColor: Colors.white,
    paddingVertical: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.neutral20,
  },
  listItemTitle: {
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colors.dark.neutral100,
    left: '-5.5%',
  },
  listItemTitleBold: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    color: Colors.primary.base,
  },
  listItemTitleBoldDisabled: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    color: Colors.dark.neutral50,
  },
  checkBoxChecked: {
    backgroundColor: Colors.primary.base,
    borderRadius: 5,
    padding: 8,
  },
  checkBoxNotChecked: {
    backgroundColor: Colors.white,
    borderRadius: 5,
    borderColor: Colors.dark.neutral50,
    borderWidth: 2,
    padding: 11,
  },
  // END GLOBAL //
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: Colors.white,
  },
  buatSoalContainer: {
    flexDirection: 'column',
    padding: 16,
    borderColor: Colors.dark.neutral20,
    borderWidth: 1,
    borderRadius: 10,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  noQuestionText: {
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
  },
  countQuestionText: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
  },
  countQuestionlabel: {
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral60,
  },
});
