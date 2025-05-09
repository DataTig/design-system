import './page.css';
import './header.css';

import { getHeaderHTML } from './Header';
import { getFooterHTML } from './Footer';


export const getPageHTML = () => {

  const html = `
<html>
    <head>
    </head>
    <body>
    ` + getHeaderHTML() +  `
    <div id="body"><div class="content">
        Page Content
    </div></div>
    ` + getFooterHTML() +  `
    </body>
</html>
  `;

  return html;
};
