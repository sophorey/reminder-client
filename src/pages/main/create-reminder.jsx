import { PlusCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import ReminderEdit from './reminder-edit';

const CreateReminder = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeRemainder, setActiveRemainder] = useState();

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCreateReminder = () => {
    showModal();
  };
  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button icon={<PlusCircleOutlined />} style={{ justifySelf: 'center' }} onClick={handleCreateReminder} />
      <ReminderEdit {...{
        hideModal, activeRemainder, isModalVisible,
      }}
      />
    </div>
  );
};
export default CreateReminder;
