import { expect, userEvent, within } from '@storybook/test';

import { getHeadersHTML } from './Headers';

export default {}

export const Example1 = {
  title: 'Headers 1',
  render: () => getHeadersHTML(),
};

export const HTML1 = {
  title: 'HTML 1',
  render: () => '<pre>' + getHeadersHTML().replace(/</g, '&lt;') + '</pre>',
};

