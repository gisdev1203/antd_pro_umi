import { useEffect } from 'react';
import { QuestionCircleOutlined, LinkOutlined, PlusOutlined, FilterOutlined, ExportOutlined } from '@ant-design/icons';
import { Row, Col, Card, Button, Anchor, Select, Menu, Radio, Tabs, Input, Table } from 'antd';
import  './index.less';

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
const dataSource1 = [
  {
    key: '1',
    discount: 'Custom Discount',
    quantity: '3',
    amount: '฿590.00',
    dptransaction: '฿196.67',
    rowExpandable: false
  }
];

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
  // const { avatar, username } = userDetail
  const { Link } = Anchor;
  // useEffect(()=> {

  // }, []);
  
  return (
    <>
      <Row gutter={16}>
        <Col>
          <Button
            type="default"
            icon = { <QuestionCircleOutlined /> }>
            Managing employees on HQ
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={ <QuestionCircleOutlined /> }>
            Understanding staff ENT
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Managing employee commissions on HQ
          </Button>
        </Col>
        <Col gutter={16}>
          <Anchor>
            <Link
              href="#"
              target="_blank"
              style={{ fontSize: 10 }}>
              Explore full guide
              <LinkOutlined style={{ marginLeft: 5 }} />
            </Link>
          </Anchor>
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <Col style={{ position: 'relative' }}>
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
      <Row style={{ marginTop: 15 }}>
        <Col span={24}>
          <Card>
            <Row style={{ marginTop: 15 }}>
              <Col>
                <Search
                  placeholder="Search"
                  className="btn-react"
                  style={{ width: 200 }} />
              </Col>
              <Col style={{ flex: 1, textAlign: 'right' }}>
                <Button
                  type="default"
                  className='btn-rect'>Add Staff</Button>
                <Button
                  type="default"
                  className='btn-rect'
                  icon={<ExportOutlined />}>Export</Button>
              </Col>
            </Row>
            <Row style={{ marginTop: 15 }}>
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
