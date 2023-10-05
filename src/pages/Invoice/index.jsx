
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

import { Row, Col,Card, Button, Anchor,Select,Menu,Image, Space ,Table } from 'antd';
import  './index.css';

import { QuestionCircleOutlined,LinkOutlined,ExportOutlined } from '@ant-design/icons';
const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
};

const Index = ()=> {
  const { Link } = Anchor;

  const options = [
    { key: '1', label: 'Option 1' },
    { key: '2', label: 'Option 2' },
    { key: '3', label: 'Option 3' },
  ];

  const menu = (
    <Menu>
      {options.map((option) => (
        <Menu.Item key={option.key}>{option.label}</Menu.Item>
      ))}
    </Menu>
  );

  return(
    <>
      <Row gutter={16}>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Understanding invoice management
          </Button>
        </Col>
        <Col gutter={16}>
          <Anchor>
            <Link
              href="#"
              target="_blank"
              style={{ fontSize:10 }}>
              Explore full guide 
              <LinkOutlined style={{ marginLeft: 5 }} />
            </Link>
          </Anchor>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col style={{ position:'relative' }}>
          <span className='label-squareselect'>Store</span>
          <Select
            labelInValue
            defaultValue={{ value: 'THAI CANNABIS Khaosan', label: 'THAI CANNABIS Khaosan' }}
            className='squareselect'
            options={[
              {
                value: 'THAI CANNABIS CLUB Asok',
                label: 'THAI CANNABIS CLUB Asok',
              },
              {
                value: 'THAI CANNABIS Khaosan',
                label: 'THAI CANNABIS Khaosan',
              },
            ]}
          />
        </Col>
      </Row>

      <Row style={{ marginTop:15 }}>
        <Col span={24}>
          <Card>
            <Image
              preview={{ visible: false }}
              src="/invoice.png"
              className='f-left'
            />
            <div className='inv-descript'>
              <p className='title'>Create, send and track invoice with ease</p>
              <p className='description'>Selling a big ticket item? Qashier Invoices helps you easily create beautiful, customisable invoices from both the POS as well as any web browser.</p>
              <Button type="primary">ACTIVATE</Button>
            </div>
          </Card>
        </Col>
          
      </Row>
    </>
  );
  
};
  
export default Index;