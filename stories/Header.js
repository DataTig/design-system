import './page.css';
import './header.css';

export const getHeaderHTML = () => {

  const html = `
            <header>
              <div class="content">
                <h1>
                    <div class="h1-section">
                        <a href="">
                            <img src="https://www.datatig.com/images/logo.png" alt="DataTig Logo"> DataTig
                        </a>
                    </div>
                </h1>
              </div>
            </header>
            <nav id="menu">
                <div class="content">
                    <a href="#">About</a>
                    <a href="#">Logout</a>
                </div>
            </nav>
            <nav id="breadcrumbs">
                <div class="content">
                    <span class="breadcrumb"><a href="#">Overview</a></span>
                    <span class="seperator">&gt;</span>
                    <span class="breadcrumb">Admin</span>
                </div>
            </nav>
  `;

  return html;
};
