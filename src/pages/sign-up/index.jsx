import {
  Button, Col, Form, Input, Layout, Row,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../entities/user/model/user-api';
import { alert } from '../../shared/lib';
import { Header } from '../../widgets/header';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    signUp(data)
      .then((response) => {
        alert.success('You are signed up');
        navigate('/');
      })
      .catch((error) => {
        alert.error(error.message);
      });
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Header />
      <Layout.Content style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                <Input />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your email!' }]} label="Password">
                <Input />
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

export default SignUp;
function useHistory() {
  throw new Error('Function not implemented.');
}
