import { expect, userEvent, within } from '@storybook/test';

import { getTableDataHTML } from './TableData';

export default {}

export const Example1 = {
  title: 'Table Data 1',
  render: () => getTableDataHTML(),
};

export const HTML1 = {
  title: 'HTML 1',
  render: () => '<pre>' + getTableDataHTML().replace(/</g, '&lt;') + '</pre>',
};

