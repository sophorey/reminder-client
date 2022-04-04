import {
  EditOutlined, DeleteOutlined, CheckOutlined,
} from '@ant-design/icons';
import {
  Row, Col, Button,
} from 'antd';
import { useState } from 'react';
import { remaindersChanged, useRemainders } from '../../../entities/remainder/model';
import styles from './index.module.scss';
import ReminderEdit from '../reminder-edit';
import { deleteReminder, updateReminder } from '../../../entities/remainder/model/api';

const Reminders = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeRemainder, setActiveRemainder] = useState();
  const remainders = useRemainders();

  const showModal = (id) => {
    setActiveRemainder(id);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleToggleCheck = (reminder) => {
    const { id, completed } = reminder;

    // send new completed value
    updateReminder({ id, completed: !completed })
      .then((res) => {
        // rerender
        remaindersChanged(
          remainders.map((r) => {
            if (id === r.id) {
              r.completed = !r.completed;
            }
            return r;
          }),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = ({ id }) => {
    deleteReminder({ id })
      .then((res) => {
        // rewrite reminders without deleted one
        remaindersChanged([...remainders.filter((reminder) => id !== reminder.id)]);
      })
      .catch((error) => {

      });
  };

  return (
    <>
      {!isModalVisible && remainders.map((reminder) => {
        const { id, text, completed } = reminder;
        const textCn = [
          completed === true ? styles.strikethrough : null,
        ];

        return (
          <Row key={id}>
            <Col
              className={textCn.join(' ')}
              style={{ textAlign: 'left' }}
              flex="auto"
            >
              {text}
            </Col>
            <Col flex="initial">
              <Row>
                <Col>
                  <Button onClick={() => { showModal(id); }} icon={<EditOutlined />} />
                </Col>
                <Col>
                  <Button onClick={() => { handleDelete({ id }); }} icon={<DeleteOutlined />} />
                </Col>
                <Col>
                  <Button
                    onClick={() => { handleToggleCheck(reminder); }}
                    icon={<CheckOutlined />}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
      <ReminderEdit {...{
        hideModal, activeRemainder, isModalVisible,
      }}
      />
    </>
  );
};
export default Reminders;
