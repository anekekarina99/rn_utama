import {StyleSheet} from 'react-native';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary.base,
  },
  scrollView: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: 20,
  },
  buttonNotFound: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pt12: {paddingTop: 12},
  pb12: {paddingBottom: 12},
  emptyDataContainer: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 150,
  },
  notFoundTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: Colors.dark.neutral100,
    letterSpacing: 0.1,
    fontFamily: Fonts.SemiBoldPoppins,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    letterSpacing: 0.01,
    display: 'flex',
    alignItems: 'center',
    color: '#1D252D',
    marginLeft: 10,
  },
  button: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: Colors.primary.base,
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.01,
    display: 'flex',
    color: Colors.white,
  },
  titleBlack: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.01,
    display: 'flex',
    color: Colors.dark.neutral100,
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    display: 'flex',
    color: Colors.white,
  },
  subTitleBlack: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.25,
    display: 'flex',
    color: Colors.dark.neutral100,
    marginVertical: 10,
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
    borderRadius: 10,
    width: '99%',
    padding: 25,
    marginVertical: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkBox: {
    borderWidth: 0,
    width: 24,
    height: 24,
    borderRadius: 5,
    borderColor: 'red',
  },
  unCheckBox: {
    borderWidth: 1,
    width: 24,
    height: 24,
    borderRadius: 5,
    borderColor: '#A5B0BB',
  },
  rowCheck: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  rowButton: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  input: {
    backgroundColor: Colors.dark.neutral10,
    padding: 10,
    borderRadius: 30,
    fontFamily: 'Poppins-Bold',
    marginBottom: 5,
    color: Colors.dark.neutral100,
  },
});
