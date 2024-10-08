import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface CoachmarkProps {
  message?: string;
  title?: string;
  autoShow?: boolean;
  onHide?: () => void;
  onShow?: () => void;
  isAnchorReady?: boolean;
  renderArrow?: CoachmarkViewProps['renderArrow'];
  accessibilityLabel?: string;
  testID?: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  childrenStyle: StyleProp<ViewStyle>;
  leadingIcon?: any;
  buttonPrevText?: string;
  buttonNextText?: string;
  buttonSkipText?: string;
  buttonFinishText?: string;
  onPrevious?: () => void;
  onNext?: () => void;
  onSkip?: () => void;
  isHideSkipButton?: boolean;
  isShowPreviousButton?: boolean;
  arrowOffset?: number;
  arrowMiddle?: boolean;
  buttonSkipOffset?: number;
  buttonNextOffset?: number;
  buttonPreviousOffset?: number;
  buttonOnContent?: boolean;
  isVisible?: boolean;
  children?: React.ReactNode;
  top?: number;
  enableButtonContent?: boolean;
  totalCoachmark?: number;
  queue?: number;
  backgroundColor?: string;
  marginBottomContent?: number;
  maxWidth?: number;
  maxHeight?: number;
}

export enum CoachmarkPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export interface CoachmarkArrowProps {
  position?: CoachmarkPosition;
  x: number;
  arrowOffset?: number;
}

export interface CoachmarkContentProps {
  message: string;
  title?: string;
  leadingIcon?: any;
  buttonOnContent?: boolean;
  handleHide?: any;
  buttonNextText?: string;
  buttonPrevText?: string;
  buttonSkipText?: string;
  onNext?: () => void;
  onPrev?: () => void;
  onSkip?: () => void;
  showButtonPrev?: boolean;
  totalCoachmark?: number;
  queue?: number;
  buttonFinishText?: string;
}

export type CoachmarkViewProps = {
  renderArrow: ({
    x,
    position,
    arrowOffset,
  }: {
    x: number;
    position?: CoachmarkPosition;
    arrowOffset?: number;
  }) => React.ReactElement<CoachmarkArrowProps>;
  title?: string;
  leadingIcon?: any;
  onNext: () => void;
  onSkip: () => void;
  onPrev: () => void;
  buttonNextText?: string;
  buttonPrevText?: string;
  buttonSkipText?: string;
  totalCoachmark?: number;
  queue?: number;
  buttonFinishText?: string;
} & CoachmarkContentProps &
  CoachmarkArrowProps;
