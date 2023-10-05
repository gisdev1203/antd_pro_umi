import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { Row, Col,Card, Button, Anchor,Select,Menu,Input, Space ,Table } from 'antd';
import { QuestionCircleOutlined,LinkOutlined,ExportOutlined } from '@ant-design/icons';
import './index.css';

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
};
const { Search } = Input;

const dataSource = [
  {
  }
];
  
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
    title: 'Amount',
    dataIndex: 'Amount',
    key: 'Amount',
    sorter: {
      compare: (a, b) => a.Amount - b.Amount,
      multiple: 3,
    },
  }
  ,
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
    title: 'Notes',
    dataIndex: 'Notes',
    key: 'Notes',
    sorter: {
      compare: (a, b) => a.Notes - b.Notes,
      multiple: 3,
    },
  }
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
  return (
    <>
      <Row gutter={16}>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Understanding cash management
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
        <Col>
          <Button className='btn-rect1'>Amount in Cash Drawer :฿ 4112443.00</Button>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col span={24}>
          <Card  bordered={false} >
            <Row>
              <Col>
                <Search
                  placeholder="Search"
                  style={{ width: 200 }}/>
              </Col>
              <Col style={{ flex:1, textAlign:'right' }}>
                <Button type="default">Wednesday 21/06/2023</Button>
                <Button
                  type="default"
                  icon={<ExportOutlined/>}>EXPORT</Button>
              </Col>
            </Row>
            <Row style={{ marginTop:15 }}>
              <Col span={24}>
                <span>Cash In/Out History</span>
                <Table
                  dataSource={dataSource}
                  columns={columns}
                />
              </Col>
                        
            </Row>
            <Row>
              <Col span={24}>
                <span>Cash Sales</span>
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
