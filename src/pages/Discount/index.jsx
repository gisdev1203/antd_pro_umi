
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import PropTypes from 'prop-types';

import { Row, Col,Card, Button, Anchor,Select,Menu,Radio ,Tabs, Input,Table } from 'antd';
import  './index.css';
import { QuestionCircleOutlined,LinkOutlined,PlusOutlined,FilterOutlined } from '@ant-design/icons';


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
    title: 'DISCOUNT TITLE',
    dataIndex: 'DISCOUNTTITLE',
    key: 'DISCOUNTTITLE'
  },
  {
    title: 'START DATE',
    dataIndex: 'STARTDATE',
    key: 'STARTDATE'
  },
  {
    title: 'END DATE',
    dataIndex: 'ENDDATE',
    key: 'ENDDATE'
  },
  {
    title: 'DAY / TIME',
    dataIndex: 'DAYTIME',
    key: 'DAYTIME'
  },
  {
    title: 'TRIGGER TYPE',
    dataIndex: 'TRIGGERTYPE',
    key: 'TRIGGERTYPE'
  },
  {
    title: 'DISCOUNT TYPE',
    dataIndex: 'DISCOUNTTYPE',
    key: 'DISCOUNTTYPE'
  },
  {
    title: 'MORE ACTIONS',
    dataIndex: 'MOREACTIONS',
    key: 'MOREACTIONS'
  }
];
const DiscountManagement = () => {
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
  const { Link } = Anchor;


    
  return (
    <>
      <Row gutter={16}>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            See how it works
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Managing discount
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Managing exclusions
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
            <Row><Col style={{ flex:1, textAlign:'right' }}><Button
              type="primary"
              icon={<PlusOutlined />}>Create New Discount</Button></Col></Row>
            <Row style={{ marginTop:15 }}>
              <Col>
                <Search
                  placeholder="Search"
                  className="btn-react"
                  style={{ width: 200 }}/>
                <Button
                  type="default"
                  style={{ marginLeft:10 }}
                  icon = {<FilterOutlined />}>Filter</Button>
              </Col>
              <Col style={{ flex:1, textAlign:'right' }}>
                <Radio.Group options={option}  />
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


export default DiscountManagement;
