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
  dataCard: {
    padding: 16,
  },
  dataCategory: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.dark.neutral60,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    marginBottom: 4,
  },
  dataTitle: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.dark.neutral100,
    fontWeight: '400',
    fontFamily: Fonts.RegularPoppins,
    marginBottom: 4,
  },
  dataTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dataTimeIcon: {
    marginRight: 4,
  },
  dataTimeTitle: {
    fontSize: 12,
    lineHeight: 16,
    color: Colors.dark.neutral60,
    fontWeight: '400',
    fontFamily: Fonts.RegularPoppins,
  },
  grayLine: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.dark.neutral20,
  },
  dataContainer: {
    flex: 1,
  },
  swipeUpDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  swipeUpDateTitle: {
    flexDirection: 'row',
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
    height: 300,
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
  swipeUpButtonCancel: {
    flex: 1,
    marginRight: 8,
  },
  swipeUpButtonConfirm: {
    flex: 1,
  },
  noDataContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataIcon: {
    width: 120,
    height: 120,
    marginBottom: 12,
  },
  noDataTitle: {
    fontSize: 18,
    lineHeight: 24,
    color: Colors.dark.neutral100,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    textAlign: 'center',
    marginBottom: 6,
  },
  noDataButton: {
    width: '35%',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  tabCloseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 30,
    height: 30,
    backgroundColor: Colors.primary.light3,
    marginRight: 10,
  },
  tabCardActive: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary.base,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  tabCardPassive: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary.light3,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  tabTitleActive: {
    fontSize: 14,
    lineHeight: 22,
    color: Colors.white,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
    marginRight: 8,
  },
  tabTitlePassive: {
    marginRight: 8,
    fontSize: 14,
    lineHeight: 22,
    color: Colors.primary.base,
    fontWeight: '600',
    fontFamily: Fonts.SemiBoldPoppins,
  },
});
