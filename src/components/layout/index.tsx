import './index.css';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className='container'>{children}</div>;
}

export default Layout;
