import './page.css';
import './popout.css';

export const getPopoutHTML = () => {

  const html = `
        <div class="popout-box">
            <h2>What is DataTig?</h2>
            <p>
                DataTig is a set of tools to help when a community of people want to crowd source a data set and they use a git repository to store the data.
            </p>
        </div>
  `;

  return html;
};
