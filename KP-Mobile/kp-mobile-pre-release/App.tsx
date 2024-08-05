import {RouteApp} from '@components/atoms/RouteApp';
import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import toObject from 'dayjs/plugin/toObject';
import objectSupport from 'dayjs/plugin/objectSupport';
import utc from 'dayjs/plugin/utc';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.locale('id');
dayjs.extend(duration);
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(toObject);
dayjs.extend(objectSupport);
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function App(): JSX.Element {
  return <RouteApp />;
}

export default App;
