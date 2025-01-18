import './page.css';
import './tableData.css';
import './button.css';

export const getTableDataHTML = () => {

  const html = `
        <table class="data">
            <tr>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>&nbsp;</th>
            </tr>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>
                    <a href="https://www.datatig.com/" class="button">Action</a>
                </td>
            </tr>
        </table>
  `;

  return html;
};
