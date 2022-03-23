import {
  Col,
  Layout,
  Row,
} from 'antd';
import { Header } from '../../widgets/header';
import Labels from './labels';

const Settings = () => (
  <>
    <Header />
    <Layout>
      <Layout.Content>
        <Row align="middle" justify="center" style={{ minHeight: 'calc(100vh - 64px - 70px)' }}>
          <Col xs={22} sm={18} lg={16} md={14} xl={12} xxl={10}>
            <Labels />
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
    <Layout.Footer>footer</Layout.Footer>
  </>
);
export default Settings;
