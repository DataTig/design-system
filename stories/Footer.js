import './page.css';
import './footer.css';

export const getFooterHTML = () => {

  const html = `
        <footer>
            <div class="content">
                Powered by <a href="https://www.datatig.com/">DataTig</a>.
            </div>
        </footer>
  `;

  return html;
};
