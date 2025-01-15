import { expect, userEvent, within } from '@storybook/test';

import { getFooterHTML } from './Footer';

export default {}

export const Example1 = {
  title: 'Footer 1',
  render: () => getFooterHTML(),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const HTML1 = {
  title: 'HTML 1',
  render: () => '<pre>' + getFooterHTML().replace(/</g, '&lt;') + '</pre>',
};

