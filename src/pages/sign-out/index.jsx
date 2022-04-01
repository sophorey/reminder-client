import {
  Button, Col, Form, Input, Layout, Row, Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { alert } from '../../shared/lib';
import { Header } from '../../widgets/header';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = (data) => {
    localStorage.setItem('accessToken', '');
    alert.success('You are signed out');
    navigate('/');
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header />
      <Layout.Content style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
      }}
      >
        <Row style={{
          position: 'absolute',
          top: '0',
          transform: 'translate(-50%)',
          left: '50%',
        }}
        >
          <Typography.Title>Sign Out</Typography.Title>

        </Row>
        <Row>
          <Col
            span={10}
            style={{ margin: '0 auto' }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 16,
              }}
              onFinish={handleSignOut}
            >
              <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Sign Out
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Footer>footer</Layout.Footer>
    </Layout>
  );
};

export default SignOut;
