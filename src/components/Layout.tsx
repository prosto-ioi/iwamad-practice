import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { profile } from '../data/profile';

export function Layout() {
  return (
    <>
      <Header title="Week 4 · Routing + Context" />

      {/* only the page content changes here, Header and Footer stay */}
      <Outlet />

      <Footer year={2026} name={profile.name} />
    </>
  );
}
