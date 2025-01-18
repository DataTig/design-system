import './page.css';
import './tableSummary.css';

export const getTableSummaryHTML = () => {

  const html = `
      <table class="summary">
        <tr>
            <th>Field 1</th>
            <td>
                Data 1
            </td>
        </tr>
        <tr>
            <th>Field 2</th>
            <td>
                Data 2
            </td>
        </tr>
    </table>
  `;

  return html;
};
