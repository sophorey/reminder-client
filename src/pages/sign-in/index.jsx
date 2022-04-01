import {
  Button, Col, Form, Input, Layout, Row,
} from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../shared/api/user-api';
import { alert } from '../../shared/lib';
import { Header } from '../../widgets/header';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    signIn(e)
      .then(() => {
        alert.success('You are signed in');
        navigate('/');
      })
      .catch((error) => {
        alert.error(error.message);
      });
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header />
      <Layout.Content style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      >
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
              onFinish={handleSubmit}
            >
              <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]} label="Email">
                <Input value={email} onChange={handleEmailChange} />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your email!' }]} label="Password">
                <Input value={password} onChange={handlePasswordChange} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
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
export default SignIn;
