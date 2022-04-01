import { Layout, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => (
  <Layout.Header>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ justifyContent: 'end' }}
    >
      {[
        { label: 'Remainders', path: '/' },
        { label: 'Settings', path: '/settings' },
        { label: 'Sign in', path: '/signin' },
        { label: 'Sign up', path: '/signup' },
        { label: 'Sign out', path: '/signout' },
      ].map(({ label, path }) => (
        <Menu.Item key={path}>
          <Link to={path}>{label}</Link>
        </Menu.Item>
      ))}
    </Menu>
    <div style={{
      zIndex: 100, position: 'fixed', display: 'flex', flexDirection: 'column',
    }}
    >
      <span>thh146@gmail.com</span>
      <span>password</span>
    </div>
  </Layout.Header>
);
export default Header;
