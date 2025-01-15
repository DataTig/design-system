import { expect, userEvent, within } from '@storybook/test';

import { getPageHTML } from './Page';

export default {}

export const Example1 = {
  title: 'Page 1',
  render: () => getPageHTML(),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const HTML1 = {
  title: 'HTML 1',
  render: () => '<pre>' + getPageHTML().replace(/</g, '&lt;') + '</pre>',
};

