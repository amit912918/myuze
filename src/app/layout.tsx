'use client';
import { ReactNode } from 'react';
import './globals.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // or any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { usePathname } from 'next/navigation'
import Menubar from './dashboard/menubar/page';
import { DashboardProvider } from '../context/DashboardProvider';
import ToastProvider from '../components/common/ToastProvider';

export default function RootLayout({ children }: { children: ReactNode }) {

  const pathname = usePathname() ?? ''; // ensures it's always a string

  // Define routes where the navbar should be hidden
  const hideNavbarOnRoutes = ['/auth/login', '/auth/verification'];

  const shouldShowNavbar = !hideNavbarOnRoutes.includes(pathname);
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen w-[400px] m-auto">
        <DashboardProvider>
          <main className="flex-1">
            <ToastProvider />
            {children}
          </main>
          {shouldShowNavbar && <Menubar />}
        </DashboardProvider>
      </body>
    </html>
  );
}
