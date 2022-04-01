import { DeleteOutlined, EditOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import {
  Button, Modal, Input, Form, Col, Row,
} from 'antd';
import { useEffect, useState } from 'react';
import { labelsPageOpened, useLabels } from '../../../entities/labels';

const Labels = () => {
  const [isLabelsEditModalVisible, setIsLabelsEditModalVisible] = useState(false);
  const labels = useLabels();

  useEffect(() => {
    labelsPageOpened();
  }, []);

  const handleCancel = () => {
    setIsLabelsEditModalVisible(false);
  };

  const handleOk = () => {
    setIsLabelsEditModalVisible(false);
  };

  const showModal = () => {
    setIsLabelsEditModalVisible(true);
  };

  return (
    <>
      <Row>
        <div style={{ marginBottom: '24px' }}>
          {' '}
          <Button placeholder="Labels" onClick={() => { showModal(); }}>Labels</Button>
        </div>

      </Row>
      <Row>
        <Col flex="auto">
          <Form layout="vertical">
            <Form.Item name="email" label="New email" rules={[{ required: true, message: 'Please input your Email' }]}>
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
          <Form layout="vertical">
            <Form.Item name="password" label="Old password" rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Input
                style={{ display: 'block' }}
                type="password"
              />
            </Form.Item>
            <Form.Item name="newPassword" label="New password" rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Input
                type="password"
              />
            </Form.Item>
            <Form.Item name="confirmNewPassword" label="Confirm new password" rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Input
                type="password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      <Modal
        visible={isLabelsEditModalVisible}
        onCancel={handleCancel}
        footer={[<Button onClick={handleOk}>Save</Button>]}
        maskTransitionName=""
        transitionName=""
      >
        {labels.map((label) => (
          <Row key={label.id}>
            <Col style={{ textAlign: 'left' }} flex="auto">{label.text}</Col>
            <Col flex="initial" style={{ marginRight: '30px' }}>
              <Row>
                <Col>
                  {' '}
                  <Button onClick={() => { }} icon={<EyeInvisibleOutlined />} />
                </Col>
                <Col>
                  {' '}
                  <Button onClick={() => { }} icon={<EditOutlined />} />
                </Col>
                <Col>
                  {' '}
                  <Button onClick={() => { }} icon={<DeleteOutlined />} />
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Modal>
    </>
  );
};
export default Labels;
