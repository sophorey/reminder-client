import {
  EditOutlined, DeleteOutlined, CheckOutlined, PlusOutlined,
} from '@ant-design/icons';
import {
  Row, Col, Button, Modal, DatePicker, Input, Select, Space, Divider, Typography,
} from 'antd';
import { useState } from 'react';
import { useRemainders } from '../../../entities/remainder/model';

const Remainders = () => {
  const [isEditRemaiderModalVisible, setIsEditRemaiderModalVisible] = useState(false);
  const [activeRemainder, setActiveRemainder] = useState();
  const [inputRemainderText, setInputRemainderText] = useState();
  const [sendedData, setSendedData] = useState('');

  const remainders = useRemainders();

  const toggleCheck = () => {

  };

  const showModal = (id) => {
    setActiveRemainder(id);
    setIsEditRemaiderModalVisible(true);
  };

  const handleCancel = () => {
    setIsEditRemaiderModalVisible(false);
  };

  const hideModal = () => {
    setSendedData(inputRemainderText);
    setIsEditRemaiderModalVisible(false);
  };

  const handleRemainderTextChange = (e) => {
    setInputRemainderText(e.target.value);
  };

  const [label, setLabel] = useState('');

  const onLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const addLabel = (e) => {
    e.preventDefault();
    // TODO add label to backend and current remainder
    setLabel('');
  };

  const dropdownRender = (menu) => (
    <>
      {menu}
      <Divider style={{ margin: '8px 0' }} />
      <Space align="center" direction="vertical" style={{ padding: '0 8px 4px' }}>
        <Input placeholder="Please enter label" value={label} onChange={onLabelChange} />
        <Typography.Link onClick={addLabel} style={{ whiteSpace: 'nowrap' }}>
          <PlusOutlined />
          Add label
        </Typography.Link>
      </Space>
    </>
  );

  return (
    <>
      {!isEditRemaiderModalVisible && remainders.map(({ id, title }) => (
        <Row key={id}>
          <Col style={{ textAlign: 'left' }} flex="auto">{title}</Col>
          <Col flex="initial">
            <Row>
              <Col>
                <Button onClick={() => { showModal(id); }} icon={<EditOutlined />} />
              </Col>
              <Col><Button icon={<DeleteOutlined />} /></Col>
              <Col>
                <Button onClick={() => { toggleCheck(); }} icon={<CheckOutlined />} />
              </Col>
            </Row>
          </Col>
        </Row>
      ))}

      <Modal
        visible={isEditRemaiderModalVisible}
        onCancel={handleCancel}
        footer={[<Button onClick={hideModal}>Save</Button>]}
        maskTransitionName=""
        transitionName=""
      >
        {remainders.filter(({ id }) => id === activeRemainder).map(({ title, labels }) => (
          <Space direction="vertical" style={{ maxWidth: '70%', width: '500px' }}>
            <Input
              defaultValue={title}
              value={inputRemainderText}
              onChange={handleRemainderTextChange}
            />
            <DatePicker
              onChange={(date, dateString) => { console.log(dateString); }}
            />
            <Input.Group>
              <Select defaultValue="Doesn't repeat" style={{ minWidth: '150px' }}>
                <Select.Option value="Doesn't repeat">
                  Doesn&apos;t repeat
                </Select.Option>
                <Select.Option value="Daily">Daily</Select.Option>
                <Select.Option value="Weekly">Weekly</Select.Option>
                <Select.Option value="Monhly on the third Sunday">Monhly on the third Sunday</Select.Option>
                <Select.Option value="Annually">Annually</Select.Option>
                <Select.Option value="Custom...">Custom...</Select.Option>
              </Select>
            </Input.Group>
            <Input.Group>
              <Select
                style={{ minWidth: '150px' }}
                dropdownRender={dropdownRender}
                placeholder="You can select a tag"
              >
                {labels.map((lable) => (
                  <Select.Option
                    value={lable}
                  >
                    {lable}
                  </Select.Option>
                ))}
              </Select>
            </Input.Group>
          </Space>
        ))}
      </Modal>
    </>
  );
};
export default Remainders;
