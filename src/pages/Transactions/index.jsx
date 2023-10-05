import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';


import { Row, Col,Card, Button, Anchor,Select,Menu,Input, Space ,Table } from 'antd';
import  './index.css';

import { QuestionCircleOutlined,LinkOutlined,ExportOutlined } from '@ant-design/icons';

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
};

const dataSource = [
  {
  
      
  } ];
  
const columns = [
  {
    title: 'Time',
    dataIndex: 'Time',
    key: 'Time',
    sorter: {
      compare: (a, b) => a.Time - b.Time,
      multiple: 3,
    },
  },
  {
    title: 'Receipt No.',
    dataIndex: 'ReceiptNo',
    key: 'ReceiptNo',
    sorter: {
      compare: (a, b) => a.ReceiptNo - b.ReceiptNo,
      multiple: 3,
    },
  }
  ,
  {
    title: 'Order Number',
    dataIndex: 'OrderNumber',
    key: 'OrderNumber',
    sorter: {
      compare: (a, b) => a.OrderNumber - b.OrderNumber,
      multiple: 3,
    },
  },
  {
    title: 'Total Amount',
    dataIndex: 'TotalAmount',
    key: 'TotalAmount',
    sorter: {
      compare: (a, b) => a.TotalAmount - b.TotalAmount,
      multiple: 3,
    },
  },
  {
    title: 'Payment Method',
    dataIndex: 'PaymentMethod',
    key: 'PaymentMethod',
    sorter: {
      compare: (a, b) => a.PaymentMethod - b.PaymentMethod,
      multiple: 3,
    },
  },
  {
    title: 'Transaction Note',
    dataIndex: 'TransactionNote',
    key: 'TransactionNote',
    sorter: {
      compare: (a, b) => a.TransactionNote - b.TransactionNote,
      multiple: 3,
    },
  },
  {
    title: 'Payment Note',
    dataIndex: 'PaymentNote',
    key: 'PaymentNote',
    sorter: {
      compare: (a, b) => a.PaymentNote - b.PaymentNote,
      multiple: 3,
    },
  },
  {
    title: 'Summary',
    dataIndex: 'Summary',
    key: 'Summary',
    sorter: {
      compare: (a, b) => a.Summary - b.Summary,
      multiple: 3,
    },
  },
  {
    title: 'Order Type',
    dataIndex: 'OrderType',
    key: 'OrderType',
    sorter: {
      compare: (a, b) => a.OrderType - b.OrderType,
      multiple: 3,
    },
  },
  {
    title: 'Transaction Staff Name',
    dataIndex: 'TransactionStaffName',
    key: 'TransactionStaffName',
    sorter: {
      compare: (a, b) => a.TransactionStaffName - b.TransactionStaffName,
      multiple: 3,
    },
  }
];
const { Search } = Input;

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
            Understanding transaction records on HQ
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Editing staff for your transactions
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            How to process an exchange
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
          <Card  bordered={false} >
            <Row>
              <Col>
                <Search
                  placeholder="Search"
                  className="btn-react"
                  style={{ width: 200 }}/>
              </Col>
              <Col style={{ flex:1, textAlign:'right' }}>
                <Select
                  labelInValue
                  defaultValue={{ value: 'ALL', label: 'ALL' }}
                  className='btn-react'
                  options={[
                    {
                      value: 'ALL',
                      label: 'ALL',
                    },
                    {
                      value: 'DISCOUNTED',
                      label: 'DISCOUNTED',
                    },
                    {
                      value: 'VOIDED',
                      label: 'VOIDED',
                    },
                    {
                      value: 'VOUCHER',
                      label: 'VOUCHER',
                    },
                    {
                      value: 'UNPAID',
                      label: 'UNPAID',
                    }
                  ]}
                />
                <Button
                  type="default"
                  className='btn-rect1'>Thursday 22/06/2023</Button>
                <Button
                  type="default"
                  className='btn-rect1'
                  icon={<ExportOutlined/>}>EXPORT</Button>
                <Button
                  type="default"
                  className='btn-rect1'
                  icon={<ExportOutlined/>}>EXPORT BY MONTH</Button>
              </Col>
            </Row>
            <Row style={{ marginTop:15 }}>
              <Col span={24}>
                <Table
                  dataSource={dataSource}
                  columns={columns}
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