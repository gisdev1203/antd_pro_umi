import React from 'react';
// import { Page, ScrollBar } from 'components';
import { Row, Col,Card, Button, Anchor,Select,Menu,Image ,Tabs,Input,Table } from 'antd';
import  './index.less';
import { QuestionCircleOutlined,LinkOutlined,PlusOutlined,FilterOutlined, ExportOutlined } from '@ant-design/icons';

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
};
const { Search } = Input;
const option = [
  { label: 'All', value: 'All' },
  { label: 'Ongoing', value: 'Ongoing' },
  { label: 'Upcoming', value: 'Upcoming' },
  { label: 'Expired', value: 'Expired' },
];
const dataSource1= [
  {
    key: '1',
    discount: 'Custom Discount',
    quantity: '3',
    amount:'฿590.00',
    dptransaction:'฿196.67',
    rowExpandable: false
        
  } ];
const columns1 = [
  {
    title: 'Staff Name',
    dataIndex: 'StaffName',
    key: 'StaffName'
  },
  {
    title: 'Hourly Rate (฿)',
    dataIndex: 'HourlyRate',
    key: 'HourlyRate'
  },
  {
    title: 'Staff PIN',
    dataIndex: 'StaffPIN',
    key: 'StaffPIN'
  },
        
];

const Index = () => {

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
  const onChange1 = ({ target: { value } }) => {
    console.log('radio1 checked', value);
    // setValue1(value);
  };
  return (
    <>
      <Row gutter={16}>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Understanding time card feature
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Using time card feature on app
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Managing employees' time cards on HQ
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
              src="/timecard.png"
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