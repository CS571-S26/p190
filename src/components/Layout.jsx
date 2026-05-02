import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

export default function Layout() {
  return (
    <div className="scrapbook-wrapper">
      <div className="scrapbook-container">
        <Header />
        
        <main className="scrapbook-main">
          <Outlet />
        </main>
        
        <footer className="scrapbook-footer">
          <div className="footer-content text-center">
            <div className="footer-line">
              <span>✦</span>
            </div>
            <p className="footer-copyright">
              Sueños 2026 Trip Journal — Made with ♥ and wanderlust
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}