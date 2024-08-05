/* eslint-disable react-native/no-inline-styles */
import React, {FC, memo, useMemo, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import IconCalendar from '@assets/svg/ic16_calendar.svg';
import IconMoreGray from '@assets/svg/ic_more_gray.svg';
import IconUsers from '@assets/svg/ic16_users.svg';
import IconCopy from '@assets/svg/ic24_copy_blue.svg';
import {TAB_NAMES} from '../utils';
import {Button, SwipeUp} from '@components/atoms';

type Props = {
  category: string;
  rombelName: string;
  mapel: string;
  title: string;
  givenDate: string;
  collectionDate: string;
  studentInfo?: string;
  type: keyof typeof TAB_NAMES;
  buttonTitle?: string;
  buttonOnPress?: () => void;
  buttonOnPressDuplicate?: () => void;
  id: number;
  navigation: any;
};

const CardListItem: FC<Props> = ({
  category,
  rombelName,
  mapel,
  title,
  givenDate,
  collectionDate,
  studentInfo,
  type,
  buttonTitle,
  buttonOnPress,
  buttonOnPressDuplicate,
}) => {
  const isFirstTab = type === 'PERLU_DIPERIKSA';
  const [isShowSwipeUp, setIsShowSwipeUp] = useState(false);
  const MORE_MENUS = useMemo(
    () => [
      {
        isActive: true,
        icon: <IconCopy />,
        buttonTitle: 'Duplikat Tugas',
        buttonOnPress: () => {
          if (buttonOnPressDuplicate) {
            buttonOnPressDuplicate();
          }
          setIsShowSwipeUp(false);
        },
      },
    ],
    [],
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', gap: 4}}>
          <Text style={styles.categoryText}>{category}</Text>
          <Text style={styles.categoryText}>{rombelName}</Text>
        </View>

        <TouchableOpacity onPress={() => setIsShowSwipeUp(true)}>
          <IconMoreGray />
        </TouchableOpacity>
      </View>

      <View style={styles.__flexRowContainer}>
        <View style={styles.flex1}>
          <Text style={styles.mapelText}>{mapel}</Text>
          <Text style={styles.titleText}>{title}</Text>
        </View>

        {buttonTitle && buttonOnPress && (
          <Button
            outline={true}
            label={buttonTitle}
            action={buttonOnPress}
            style={{paddingHorizontal: 13}}
          />
        )}
      </View>

      <View style={{flexDirection: 'column', marginTop: 8}}>
        <View style={{flex: 1}}>
          <Text style={styles.__regularText}>Pengerjaan</Text>

          <View style={styles.__wrapIconAndText}>
            <IconCalendar />

            <Text style={[styles.__regularText, styles.__regularTextFlex]}>
              {givenDate}
            </Text>
          </View>
        </View>

        <View style={{flex: 1}}>
          <Text style={styles.__regularText}>Selesai Dinilai</Text>

          <View style={styles.__wrapIconAndText}>
            <IconCalendar />

            <Text style={[styles.__regularText, styles.__regularTextFlex]}>
              {collectionDate}
            </Text>
          </View>
        </View>
      </View>

      {studentInfo && (
        <View
          style={[
            styles.__wrapIconAndText,
            {marginTop: 8, alignItems: 'center'},
          ]}>
          <IconUsers />

          <Text
            style={[
              styles.__regularText,
              {
                fontSize: 14,
                lineHeight: 18,
                color: Colors.dark.neutral80,
              },
            ]}>
            {studentInfo}
          </Text>
        </View>
      )}

      <SwipeUp
        isSwipeLine={true}
        visible={isShowSwipeUp}
        onClose={() => setIsShowSwipeUp(false)}
        height={500}
        children={
          <View style={{paddingHorizontal: 16, paddingBottom: 16}}>
            {MORE_MENUS.map((val, key) => {
              if (val.isActive) {
                return (
                  <TouchableOpacity
                    key={key}
                    style={[
                      styles.__wrapIconAndText,
                      {
                        alignItems: 'center',
                        gap: 12,
                        marginBottom:
                          !isFirstTab && key + 1 !== MORE_MENUS.length ? 24 : 0,
                      },
                    ]}
                    onPress={val.buttonOnPress}>
                    {val.icon}

                    <Text
                      style={[
                        styles.__regularText,
                        {
                          fontSize: 16,
                          lineHeight: 24,
                          letterSpacing: 1,
                          color: Colors.dark.neutral100,
                        },
                      ]}>
                      {val.buttonTitle}
                    </Text>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  __flexRowContainer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  __regularText: {
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: Colors.dark.neutral60,
  },
  __regularTextFlex: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
    color: Colors.dark.neutral80,
  },
  __wrapIconAndText: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 4,
  },
  container: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
  },
  categoryText: {
    alignSelf: 'flex-start',
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: Colors.primary.base,
    paddingVertical: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    backgroundColor: Colors.primary.light3,
    borderRadius: 20,
  },
  mapelText: {
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
  },
  titleText: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    marginTop: 4,
  },
});

export default memo(CardListItem);
