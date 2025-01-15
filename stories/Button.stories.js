import { expect, userEvent, within } from '@storybook/test';

import { getButtonHTML } from './Button';

export default {}

export const Example1 = {
  title: 'Button 1',
  render: () => getButtonHTML(),
};

export const HTML1 = {
  title: 'HTML 1',
  render: () => '<pre>' + getButtonHTML().replace(/</g, '&lt;') + '</pre>',
};

