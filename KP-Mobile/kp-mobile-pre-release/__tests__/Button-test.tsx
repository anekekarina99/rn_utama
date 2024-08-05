import React from 'react';
import {create} from 'react-test-renderer';
import {Button} from '@components/atoms/Button';

const tree = create(
  <Button
    label="Lanjut"
    background="#CED4DA"
    color="#868E96"
    icon=""
    width=""
  />,
);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
