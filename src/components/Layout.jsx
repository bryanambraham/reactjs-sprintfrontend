import { Outlet } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="bg-white">
        <Outlet /> {/* This is where your page content will be rendered */}
      </main>
      <SiteFooter />
    </div>
  );
}

export default Layout;