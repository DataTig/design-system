import { expect, userEvent, within } from '@storybook/test';

import { getPopoutHTML } from './Popout';

export default {}

export const Example1 = {
  title: 'Popout 1',
  render: () => getPopoutHTML(),
};

export const HTML1 = {
  title: 'HTML 1',
  render: () => '<pre>' + getPopoutHTML().replace(/</g, '&lt;') + '</pre>',
};

