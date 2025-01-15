import { expect, userEvent, within } from '@storybook/test';

import { getHeaderHTML } from './Header';

export default {}

export const Example1 = {
  title: 'Header 1',
  render: () => getHeaderHTML(),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const HTML1 = {
  title: 'HTML 1',
  render: () => '<pre>' + getHeaderHTML().replace(/</g, '&lt;') + '</pre>',
};

