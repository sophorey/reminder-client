import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => (
  <Layout.Header>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ justifyContent: 'end' }}
    >
      {[{ label: 'Remainders', path: '/' }, { label: 'Settings', path: '/settings' }, { label: 'Sign in', path: '/signin' }].map(({ label, path }) => (
        <Menu.Item key={path}>
          <Link to={path}>{label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  </Layout.Header>
);
export default Header;
