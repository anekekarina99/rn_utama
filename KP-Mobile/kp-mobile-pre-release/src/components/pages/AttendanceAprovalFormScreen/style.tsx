import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headAttachmentFileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  reasonAttendanceContainer: {
    marginBottom: 8,
  },
  titleField: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.RegularPoppins,
    marginBottom: 8,
  },
  uploadTitleField: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.RegularPoppins,
    marginBottom: 4,
  },
  noteField: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.dark.neutral60,
    fontFamily: Fonts.RegularPoppins,
    marginBottom: 12,
  },
  dangerValueField: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.danger.base,
    fontFamily: Fonts.SemiBoldPoppins,
  },
  inputField: {
    backgroundColor: Colors.dark.neutral10,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 11,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputFieldValue: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.SemiBoldPoppins,
  },
  dateContainer: {
    marginBottom: 24,
  },
  dateCardContainer: {
    marginBottom: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.dark.neutral40,
    padding: 16,
  },
  noteContainer: {
    marginBottom: 80,
  },

  imageBackground: {
    borderRadius: 10,
    resizeMode: 'cover',
  },
  attachmentImageContainer: {
    height: 170,
    width: '100%',
    padding: 8,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  iconClose: {
    backgroundColor: Colors.dark.neutral10,
    padding: 12,
    borderRadius: 25,
    alignSelf: 'flex-end',
  },
  attachmentResendContainer: {
    backgroundColor: Colors.primary.light3,
    width: 150,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  attachmentResendTitle: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.primary.base,
    fontFamily: Fonts.SemiBoldPoppins,
  },
  attachmentFileContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
    borderColor: Colors.dark.neutral20,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 12,
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

  swipeUpContentContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    flex: 1,
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

  uploadButton: {
    backgroundColor: Colors.primary.light3,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    paddingVertical: 8,
  },
  uploadTitle: {
    marginLeft: 8,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: Colors.primary.base,
    fontFamily: Fonts.SemiBoldPoppins,
  },

  swipeUpDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  swipeUpDateTitle: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral100,
    fontWeight: '400',
    fontFamily: Fonts.RegularPoppins,
    marginBottom: 8,
  },
  swipeUpdateLeftField: {
    flex: 1,
    marginRight: 8,
  },
  swipeUpdateRightField: {
    flex: 1,
  },
  swipeUpDateButton: {
    flexDirection: 'row',
    paddingVertical: 11,
    paddingHorizontal: 16,
    backgroundColor: Colors.dark.neutral10,
    borderRadius: 30,
    marginBottom: 32,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  swipeUpDateLabelButton: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    textAlign: 'center',
  },
  swipeUpContainer: {
    padding: 16,
  },
  swipeUpDateWrapperField: {
    height: 85,
  },
  swipeUpDateWrapper: {
    padding: 16,
  },
  swipeUpChooseDateWrapper: {
    height: 320,
  },
  swipeUpUpload: {
    padding: 16,
  },
  swipeUpHeaderTitle: {
    fontSize: 20,
    lineHeight: 28,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    textAlign: 'center',
    marginBottom: 16,
  },
  swipeUpDateHeaderTitle: {
    fontSize: 20,
    lineHeight: 28,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    textAlign: 'center',
    marginBottom: 16,
  },
  swipeUpChooseDateHeaderTitle: {
    fontSize: 20,
    lineHeight: 28,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    textAlign: 'center',
    marginBottom: 16,
  },
  swipeUpUploadContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  swipeUpUploadHeaderTitle: {
    fontSize: 20,
    lineHeight: 28,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    textAlign: 'center',
    marginBottom: 16,
  },
  swipeUpUploadLabel: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.dark.neutral100,
    fontWeight: '400',
    fontFamily: Fonts.RegularPoppins,
  },

  swipeUpTitle: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.dark.neutral60,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    marginBottom: 16,
  },
  swipeUpContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  swipeUpLabelActiveContainer: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary.base,
    borderRadius: 20,
    marginBottom: 8,
    flexDirection: 'row',
    marginRight: 8,
  },
  swipeUpLabelPassiveContainer: {
    marginRight: 8,
    flexDirection: 'row',
    marginBottom: 8,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary.light3,
  },
  swipeUpLabelActive: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.white,
    fontWeight: '400',
    fontFamily: Fonts.RegularPoppins,
  },
  swipeUpLabelPassive: {
    fontSize: 14,
    lineHeight: 18,
    color: Colors.primary.base,
    fontWeight: '400',
    fontFamily: Fonts.RegularPoppins,
  },
  swipeUpButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  swipeUpDateButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  swipeUpChooseDateButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  swipeUpButtonCancel: {
    flex: 1,
    marginRight: 8,
  },
  swipeUpButtonConfirm: {
    flex: 1,
  },
});
