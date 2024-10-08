import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingLeft: 0,
    paddingTop: 0,
    backgroundColor: Colors.white,
    flex: 1,
  },
  finishButton: {
    borderRadius: 14,
    backgroundColor: Colors.success.light1,
    paddingVertical: 3,
    paddingHorizontal: 12,
    color: Colors.white,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    overflow: 'hidden',
  },
  questionContainer: {
    flexDirection: 'column',
    paddingLeft: 16,
    paddingTop: 16,
  },
  topQuestion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  questionImage: {
    height: 150,
    borderRadius: 10,
    marginVertical: 8,
    width: window.width * 0.9,
    resizeMode: 'cover',
  },
  topQuestionText: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: Colors.dark.neutral60,
    fontWeight: '600',
  },
  questionPGRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderColor: Colors.dark.neutral20,
    borderWidth: 1,
    marginBottom: 12,
  },
  questionPGRowCorrect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderColor: Colors.success.light1,
    borderWidth: 2,
    marginBottom: 12,
    backgroundColor: Colors.success.light2,
  },
  questionPGRowFalse: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderColor: Colors.danger.base,
    borderWidth: 2,
    marginBottom: 12,
    backgroundColor: Colors.danger.light2,
  },
  textQuestion: {
    fontFamily: Fonts.RegularPoppins,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    fontWeight: '400',
    marginBottom: 16,
    marginTop: 8,
  },
  textAnswerUraian: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    // marginBottom: 16,
    marginTop: 8,
  },
  textKey: {
    fontFamily: Fonts.RegularPoppins,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral60,
    fontWeight: '400',
  },
  textKeyCorrect: {
    color: Colors.success.light1,
  },
  textKeyFalse: {
    color: Colors.danger.base,
  },
  textAnswer: {
    fontFamily: Fonts.RegularPoppins,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    fontWeight: '400',
    paddingLeft: 8,
  },
  mcqQontainer: {
    paddingLeft: 16,
  },
  questionPGLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextPrevContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    width: '100%',
  },
  giveNilaiLabel: {
    fontFamily: Fonts.RegularPoppins,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    fontWeight: '400',
  },
  textFinish: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 0.25,
    color: Colors.dark.neutral80,
    fontWeight: '600',
  },
  popUpFinishContainer: {
    alignItems: 'center',
    marginBottom: 18,
  },
  uploader: {
    padding: 16,
    borderRadius: 10,
    marginTop: 0,
    paddingVertical: 4,
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: Colors.dark.neutral20,
  },
  headAttachmentFileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  attachmentFileContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
    borderColor: Colors.dark.neutral20,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 12,
    marginTop: 4,
  },
  attachmentFileHeadTitle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: Colors.dark.neutral60,
    fontFamily: Fonts.RegularPoppins,
    alignSelf: 'center',
  },
  attachmentDescriptionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  attachmentFileDescriptionTitle: {
    fontSize: 16,
    lineHeight: 20,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    marginLeft: 8,
    width: '90%',
  },
});
