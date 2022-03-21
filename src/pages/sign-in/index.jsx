import {
  Button, Col, Form, Input, Row,
} from 'antd';

const SignUp = () => (
  <Row style={{ height: '100vh' }} align="middle">
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
);
export default SignUp;
