

import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';
import { Row, Col,Card, Button, Anchor,Select,Menu,Switch,Table } from 'antd';
import { LeftOutlined,RightOutlined,SoundTwoTone } from '@ant-design/icons';
import './index.css';

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
};


const option = {
  title: {
    text: 'Sales Trends by Day'
  },
  legend: {
    data: [ 'All Products (01/05/2023~31/05/2023)','All Products (01/05/2022~31/05/2022)' ]
  },
  xAxis: {
    type: 'category',
    data: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22' ]
  },
  yAxis: {
    type: 'value'
  },
  series: [ {
    name: 'All Products (01/05/2023~31/05/2023)',
    data: [ 150, 230, 224, 218, 135, 147, 260 ],
    type: 'bar'
  },
  {
    name: 'All Products (01/05/2022~31/05/2022)',
    data: [ 130, 130, 214, 118, 165, 147, 260 ],
    type: 'bar'
  } ]
};

const option1 = {
  title: {
    text: 'Sales Trends by Day'
  },
  legend: {
    data: [ 'All Products (01/05/2023~31/05/2023)','All Products (01/05/2022~31/05/2022)' ]
  },
  xAxis: {
    type: 'category',
    data: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
  },
  yAxis: {
    type: 'value'
  },
  series: [ {
    name: 'All Products (01/05/2023~31/05/2023)',
    data: [ 150, 230, 224, 218, 135, 147, 260 ],
    type: 'bar'
  },
  {
    name: 'All Products (01/05/2022~31/05/2022)',
    data: [ 130, 130, 214, 118, 165, 147, 260 ],
    type: 'bar'
  } ]
};

const option2 = {
  title: {
    text: 'Sales Trends by Day'
  },
  legend: {
    data: [ 'All Products (01/05/2023)','All Products (01/05/2022)' ]
  },
  xAxis: {
    type: 'category',
    data: [ '00.00', '01.00', '02.00', '03.00', '04.00', '05.00', '06.00', '07.00', '08.00', '09.00', '10.00', '11.00', '12.00', '13.00', '14.00', '15.00', '16.00', '17.00' ]
  },
  yAxis: {
    type: 'value'
  },
  series: [ {
    name: 'All Products (01/05/2023~31/05/2023)',
    data: [ 150, 230, 224, 218, 135, 147, 260 ],
    type: 'line'
  },
  {
    name: 'All Products (01/05/2022~31/05/2022)',
    data: [ 130, 130, 214, 118, 165, 147, 260 ],
    type: 'line'
  } ]
};
const option3 = {
  title: {
    text: 'Daily Sales'
  },
  legend: {
    data: [ 'Sales' ]
  },
  xAxis: {
    type: 'category',
    data: [ '22 May', '23 May', '24 May','25 May' ]
  },
  yAxis: {
    type: 'value'
  },
  series: [ {
    name: 'All Products (01/05/2023~31/05/2023)',
    data: [ 150, 230, 224, 218, 135, 147, 260 ],
    type: 'line'
  } ]
};
const option4 = {
  title: {
    text: 'Average Sales by Day'
  },
  legend: {
    data: [ 'Sales' ]
  },
  xAxis: {
    type: 'category',
    data: [ 'Sunday', 'Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday' ]
  },
  yAxis: {
    type: 'value'
  },
  series: [ {
    name: 'All Products (01/05/2023~31/05/2023)',
    data: [ 150, 230, 224, 218, 135, 147, 260 ],
    type: 'bar'
  } ]
};

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
            title="Compare across Months"
            bordered={false}
            extra={<Button type="default"><SoundTwoTone /></Button>}
          >
            <Row>
              <Col>
                <Select
                  labelInValue
                  defaultValue={{ value: 'SALES(8)', label: 'SALES' }}
                  className='rect-select'
                  options={[
                    {
                      value: 'SALES(8)',
                      label: 'SALES',
                    },
                    {
                      value: 'QUANTITY(3)',
                      label: 'QUANTITY',
                    },
                  ]}
                />
              </Col>
              <Col style={{ marginLeft:10 }}>
                <Button
                  type="default"
                  className='btn-rect'>
                            ALL PRODUCTS
                </Button>
              </Col>
              <Col style={{ marginLeft:10 }}>
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
                            LAST MONTH
                </Button>
                <Button
                  type="default"
                  className='btn-rect'
                >
                  <RightOutlined />
                </Button>

                <span style={{ marginLeft:10,marginRight:10,fontWeight:'bold' }}>compare to</span>
                <Select
                  labelInValue
                  defaultValue={{ value: 'LAST MONTH', label: 'LAST MONTH' }}
                  className='rect-select'
                  options={[
                    {
                      value: 'LAST MONTH',
                      label: 'LAST MONTH',
                    },
                    {
                      value: 'SAME MONTH LAST YEAR',
                      label: 'SAME MONTH LAST YEAR',
                    },
                    {
                      value: 'SPECIAL MONTH',
                      label: 'SPECIAL MONTH',
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row style={{ marginTop:15 }}>
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
            title="Compare across Weeks"
            bordered={false}
            extra={<Button type="default"><SoundTwoTone /></Button>}
          >
            <Row>
              <Col>
                <Select
                  labelInValue
                  defaultValue={{ value: 'SALES(8)', label: 'SALES' }}
                  className='rect-select'
                  options={[
                    {
                      value: 'SALES(8)',
                      label: 'SALES',
                    },
                    {
                      value: 'QUANTITY(3)',
                      label: 'QUANTITY',
                    },
                  ]}
                />
              </Col>
              <Col style={{ marginLeft:10 }}>
                <Button
                  type="default"
                  className='btn-rect'>
                            ALL PRODUCTS
                </Button>
              </Col>
              <Col style={{ marginLeft:10 }}>
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
                            THIS WEEK
                </Button>
                <Button
                  type="default"
                  className='btn-rect'
                >
                  <RightOutlined />
                </Button>

                <span style={{ marginLeft:10,marginRight:10,fontWeight:'bold' }}>compare to</span>
                <Select
                  labelInValue
                  defaultValue={{ value: 'LAST WEEK', label: 'LAST WEEK' }}
                  className='rect-select'
                  options={[
                    {
                      value: 'LAST WEEK',
                      label: 'LAST WEEK',
                    },
                    {
                      value: 'SAME MONTH LAST YEAR',
                      label: 'SAME MONTH LAST YEAR',
                    },
                    {
                      value: 'SPECIAL MONTH',
                      label: 'SPECIAL MONTH',
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row style={{ marginTop:15 }}>
              <Col span={24}>
                <ReactEcharts
                  echarts={echarts}
                  option={option1}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col span={24}>
           
          <Card
            title="Compare across Days"
            bordered={false}
            extra={<Button type="default"><SoundTwoTone /></Button>}
          >
            <Row>
              <Col>
                <Select
                  labelInValue
                  defaultValue={{ value: 'SALES(8)', label: 'SALES' }}
                  className='rect-select'
                  options={[
                    {
                      value: 'SALES(8)',
                      label: 'SALES',
                    },
                    {
                      value: 'QUANTITY(3)',
                      label: 'QUANTITY',
                    },
                  ]}
                />
              </Col>
              <Col style={{ marginLeft:10 }}>
                <Button
                  type="default"
                  className='btn-rect'>
                            ALL PRODUCTS
                </Button>
              </Col>
              <Col style={{ marginLeft:10 }}>
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
                            TODAY
                </Button>
                <Button
                  type="default"
                  className='btn-rect'
                >
                  <RightOutlined />
                </Button>

                <span style={{ marginLeft:10,marginRight:10,fontWeight:'bold' }}>compare to</span>
                <Select
                  labelInValue
                  defaultValue={{ value: 'SAME DAY LAST WEEK', label: 'SAME DAY LAST WEEK' }}
                  className='rect-select'
                  options={[
                    {
                      value: 'SAME DAY LAST WEEK',
                      label: 'SAME DAY LAST WEEK',
                    },
                    {
                      value: 'SAME MONTH LAST YEAR',
                      label: 'SAME MONTH LAST YEAR',
                    },
                    {
                      value: 'SPECIAL MONTH',
                      label: 'SPECIAL MONTH',
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row style={{ marginTop:15 }}>
              <Col span={24}>
                <ReactEcharts
                  echarts={echarts}
                  option={option2}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col span={24}>
           
          <Card
            title="Compare across Hours"
            bordered={false}
            extra={<Button type="default"><SoundTwoTone /></Button>}
          >
            <Row>
              <Col>
                <Select
                  labelInValue
                  defaultValue={{ value: 'SALES(8)', label: 'SALES' }}
                  className='rect-select'
                  options={[
                    {
                      value: 'SALES(8)',
                      label: 'SALES',
                    },
                    {
                      value: 'QUANTITY(3)',
                      label: 'QUANTITY',
                    },
                  ]}
                />
              </Col>
              <Col style={{ marginLeft:10 }}>
                <Button
                  type="default"
                  className='btn-rect'>
                            ALL PRODUCTS
                </Button>
              </Col>
              <Col style={{ marginLeft:10 }}>
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
                            TODAY
                </Button>
                <Button
                  type="default"
                  className='btn-rect'
                >
                  <RightOutlined />
                </Button>

                <span style={{ marginLeft:10,marginRight:10,fontWeight:'bold' }}>compare to</span>
                <Select
                  labelInValue
                  defaultValue={{ value: 'SAME DAY LAST WEEK', label: 'SAME DAY LAST WEEK' }}
                  className='rect-select'
                  options={[
                    {
                      value: 'SAME DAY LAST WEEK',
                      label: 'SAME DAY LAST WEEK',
                    },
                    {
                      value: 'SAME MONTH LAST YEAR',
                      label: 'SAME MONTH LAST YEAR',
                    },
                    {
                      value: 'SPECIAL MONTH',
                      label: 'SPECIAL MONTH',
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row style={{ marginTop:15 }}>
              <Col span={24}>
                <ReactEcharts
                  echarts={echarts}
                  option={option2}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col span={24}>
           
          <Card
            title="Past 30 Days"
            bordered={false}
          >
            <Row style={{ marginTop:15 }}>
              <Col span={24}>
                <ReactEcharts
                  echarts={echarts}
                  option={option3}
                />
              </Col>
            </Row>
            <Row style={{ marginTop:15 }}>
              <Col span={24}>
                <ReactEcharts
                  echarts={echarts}
                  option={option4}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col span={24}>
           
          <Card
            title="Hourly Sales"
            bordered={false}
            extra={<Button type="default">Wednesday 21/06/2023</Button>}
          >
            <Row style={{ marginTop:15 }}>
              <Col span={24}>
                <ReactEcharts
                  echarts={echarts}
                  option={option3}
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
