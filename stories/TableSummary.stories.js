import { expect, userEvent, within } from '@storybook/test';

import { getTableSummaryHTML } from './TableSummary';

export default {}

export const Example1 = {
  title: 'Table Data 1',
  render: () => getTableSummaryHTML(),
};

export const HTML1 = {
  title: 'HTML 1',
  render: () => '<pre>' + getTableSummaryHTML().replace(/</g, '&lt;') + '</pre>',
};

