
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

import { Row, Col,Card, Button, Anchor,Select,Menu,Radio ,Tabs,Input,Table } from 'antd';
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
    title: 'Customer',
    dataIndex: 'Customer',
    key: 'Customer'
  },
  {
    title: 'Contact Number',
    dataIndex: 'ContactNumber',
    key: 'ContactNumber'
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'Address'
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email'
  },
  {
    title: 'Date of Birth',
    dataIndex: 'Date of Birth',
    key: 'Date of Birth'
  },{
    title: 'Registered In',
    dataIndex: 'Registered In',
    key: 'Registered In'
  },{
    title: 'Date Joined',
    dataIndex: 'Date Joined',
    key: 'Date Joined'
  },{
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID'
  },{
    title: 'Patient No',
    dataIndex: 'Patient No',
    key: 'Patient No'
  },{
    title: 'Source',
    dataIndex: 'Source',
    key: 'Source'
  },{
    title: 'SMS PDPA',
    dataIndex: 'SMS PDPA',
    key: 'SMS PDPA'
  },{
    title: 'Email PDPA',
    dataIndex: 'Email PDPA',
    key: 'Email PDPA'
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
            Managing your customers on HQ
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Managing your customers on app
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Assigning loyalty points
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
        <Col span={24}>
          <Card>
            <Row style={{ marginTop:15 }}>
              <Col>
                <Search
                  placeholder="Search"
                  className="btn-react"
                  style={{ width: 200 }}/>
              </Col>
              <Col style={{ flex:1, textAlign:'right' }}>
                <Button
                  type="default"
                  className='btn-rect'
                  icon={<PlusOutlined />}>Create</Button>
                <Button
                  type="default"
                  className='btn-rect'
                  icon={<ExportOutlined/>}>Export</Button>
              </Col> 
            </Row>
            <Row style={{ marginTop:15 }}>
              <Col span={24}>
                <Table
                  dataSource={dataSource1}
                  columns={columns1}
                        
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Index;
