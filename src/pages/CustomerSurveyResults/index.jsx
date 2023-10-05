import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { Row, Col,Card, Button, Anchor,Select,Menu,Switch,Table } from 'antd';
import { LeftOutlined,RightOutlined,QuestionCircleOutlined,LinkOutlined,SoundTwoTone,ExportOutlined } from '@ant-design/icons';
const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
};

const option = {
  title: {
    text: 'Sales (undefined)'
  },
  legend: {
    data: [ 'Sales' ]
  },
  xAxis: {
    type: 'category',
    data: [ '00.00', '00.20', '00.40', '00.60', '00.80', '01.00', '01.20' ]
  },
  yAxis: {
    type: 'value'
  },
  series: [ {
    name: 'Sales',
    data: [ 150, 230, 224, 218, 135, 147, 260 ],
    type: 'line'
  } ]
};

const option1 = {
  title: {
    text: ''
  },
  legend: {
    data: [ 'Sales' ]
  },
  xAxis: {
    type: 'category',
    data: [ 'Namfon', 'Ana', 'Rasikan', 'GG', 'Sarah', 'kwanporn', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty', 'gifty' ]
  },
  yAxis: {
    type: 'value'
  },
  series: [ {
    name: 'Sales',
    data: [ 150, 230, 224, 218, 135, 147, 260 ],
    type: 'line'
  } ]
};

const dataSource = [
  {

    
  } ];

const columns = [
  {
    title: 'Transaction Date',
    dataIndex: 'TransactionDate',
    key: 'Transaction Date',
    sorter: {
      compare: (a, b) => a.TransactionDate - b.TransactionDate,
      multiple: 3,
    },
  },
  {
    title: 'Receipt No.',
    dataIndex: 'ReceiptNo',
    key: 'Receipt No.',
    sorter: {
      compare: (a, b) => a.ReceiptNo - b.ReceiptNo,
      multiple: 3,
    },
  }
  ,
  {
    title: 'Survey Score',
    dataIndex: 'SurveyScore',
    key: 'Survey Score',
    sorter: {
      compare: (a, b) => a.SurveyScore - b.SurveyScore,
      multiple: 3,
    },
  },
  {
    title: 'Total Amount',
    dataIndex: 'TotalAmount',
    key: 'Total Amount',
    sorter: {
      compare: (a, b) => a.TotalAmount - b.TotalAmount,
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
    title: 'Staff',
    dataIndex: 'Staff',
    key: 'Staff',
    sorter: {
      compare: (a, b) => a.Staff - b.Staff,
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
            How to conduct customer satisfaction surveys
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
          <Card
            title="Compare across Days In Week"
            bordered={false}
            extra={<Button type="default"><SoundTwoTone /></Button>}
          >
            <Button
              type="default" 
              className='btn-rect f-right'>
                  01/06/2023 ~ 21/06/2023
            </Button>
            <ReactEcharts
              echarts={echarts}
              option={option}
            />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col span={24}>
          <Card
            title="Survey Score by Staff"
            bordered={false}
            extra={<Button type="default"><SoundTwoTone /></Button>}
          >
            <Button
              type="default" 
              className='btn-rect f-right'>
                  01/06/2023 ~ 21/06/2023
            </Button>
            <ReactEcharts
              echarts={echarts}
              option={option1}
            />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col span={24}>
          <Card
            title="Survey Score by Staff Name"
            bordered={false}
            extra={<Button type="default"><SoundTwoTone /></Button>}
          >
            <Button
              type="default" 
              className='f-right'
              style={{ marginLeft:10,borderRadius:0,height:50 }}>
                  01/06/2023 ~ 21/06/2023
            </Button>
            <div
              className='f-right'
              style={{ position:'relative' }}>
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
            </div>
                  
                 
            <ReactEcharts
              echarts={echarts}
              option={option}
            />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col span={24}>
          <Card
            title="Average score over a period of time"
            bordered={false}
                
          >
            <Row>
              <Col style={{ position:'relative',flex:1,  textAlign:'right' }}>
                <Select
                  labelInValue
                  defaultValue={{ value: 'Ana', label: 'Ana' }}
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
              <Col
                className='f-right'
                style={{}}>
                <Button
                  type="default"
                  className='btn-rect'
                >
                  <LeftOutlined />
                </Button>
                <Button
                  type="default"
                  className='btn-rect'
                >
                        THIS MONTH
                </Button>
                <Button
                  type="default"
                  className='btn-rect'
                >
                  <RightOutlined />
                </Button>
              </Col>
                  
            </Row>
            <Row>
              <Col span={24}>
                <ReactEcharts
                  echarts={echarts}
                  option={option}

                />
              </Col>
                  
            </Row> 
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col span={24}>
          <Card
            title="Customer Survey Results"
            bordered={false}
            extra={<Button
              type="default"
              icon={<ExportOutlined />}>EXPORT</Button>}
          >
            <Row>
              <Col style={{ flex:1, textAlign:'right' }}>
                <Button
                  type="default"
                  className='btn-react'>01/06/2023 ~ 21/06/2023</Button>
              </Col>
            </Row>
            <Row>
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
