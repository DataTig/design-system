import { expect, userEvent, within } from '@storybook/test';

import { getMiscHTML } from './Misc';

export default {}

export const Example1 = {
  title: 'Misc 1',
  render: () => getMiscHTML(),
};

export const HTML1 = {
  title: 'HTML 1',
  render: () => '<pre>' + getMiscHTML().replace(/</g, '&lt;') + '</pre>',
};

