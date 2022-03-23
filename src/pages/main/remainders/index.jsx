import {
  EditOutlined, DeleteOutlined, CheckOutlined,
} from '@ant-design/icons';
import {
  Row, Col, Button,
} from 'antd';
import { useState } from 'react';
import { useRemainders } from '../../../entities/remainder/model';
import styles from './index.module.scss';
import ReminderEdit from '../remainder-edit';
import { $authHost } from '../../../shared/api';

const Remainders = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [activeRemainder, setActiveRemainder] = useState();
  const remainders = useRemainders();

  const showModal = (id) => {
    setActiveRemainder(id);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const toggleCheck = (id) => {
  };

  return (
    <>
      {!isModalVisible && remainders.map(({ id, title, completed }) => {
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
              {title}

            </Col>
            <Col flex="initial">
              <Row>
                <Col>
                  <Button onClick={() => { showModal(id); }} icon={<EditOutlined />} />
                </Col>
                <Col><Button icon={<DeleteOutlined />} /></Col>
                <Col>
                  <Button onClick={() => { toggleCheck(id); }} icon={<CheckOutlined />} />
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })}
      <ReminderEdit {...{
        handleCancel, hideModal, activeRemainder, isModalVisible,
      }}
      />
    </>
  );
};
export default Remainders;
