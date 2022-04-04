import { PlusOutlined } from '@ant-design/icons';
import {
  Modal, Button, Space, Input, DatePicker, Select, Divider, Typography,
} from 'antd';
import { useState } from 'react';
import { useRemainders } from '../../../entities/remainder';

const ReminderEdit = ({
  isModalVisible, activeRemainder, hideModal,
}) => {
  const remainders = useRemainders();
  const [label, setLabel] = useState('');
  const [text, setText] = useState('');

  const handleRemainderTextChange = (e) => {
    setText(e.target.value);
  };

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
    <Modal
      visible={isModalVisible}
      onCancel={hideModal}
      footer={[<Button onClick={hideModal}>Save</Button>]}
      maskTransitionName=""
      transitionName=""
    >
      {remainders.filter(({ id }) => id === activeRemainder).map(({ title, labels }) => (
        <Space direction="vertical" style={{ maxWidth: '70%', width: '500px' }}>
          <Input
            defaultValue={title}
            value={text}
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
  );
};
export default ReminderEdit;
