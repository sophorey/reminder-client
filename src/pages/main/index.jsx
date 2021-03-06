import { PlusCircleOutlined, PlusSquareOutlined } from '@ant-design/icons';
import {
  Button,
  Col, Layout, Row,
} from 'antd';
import { useEffect } from 'react';
import { remaindersPageOpened } from '../../entities/remainder';
import { Header } from '../../widgets/header';
import CreateReminder from './create-reminder';
import Reminders from './reminders';

function NotesListPage() {
  useEffect(() => {
    remaindersPageOpened();
  }, []);

  return (
    <Layout>
      <Header />
      <Layout>
        <Layout.Content>
          <Row align="middle" justify="center" style={{ minHeight: 'calc(100vh - 64px - 70px)' }}>
            <Col xs={22} sm={18} lg={16} md={14} xl={12} xxl={10} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CreateReminder />
              <Reminders />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
      <Layout.Footer>footer</Layout.Footer>
    </Layout>
  );
}
export default NotesListPage;
