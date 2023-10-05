
import React, { PureComponent } from 'react';
// import ReactEcharts from 'echarts-for-react';
// import echarts from 'echarts';
// import PropTypes from 'prop-types';

import { Row, Col,Card, Button, Anchor,Select,Menu,Tabs } from 'antd';

// import store from 'store';
import { QuestionCircleOutlined,LinkOutlined,EditOutlined,OrderedListOutlined,PlusOutlined,SearchOutlined,ExportOutlined } from '@ant-design/icons';

import './index.less';
const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
};
const items = [
  {
    key: '1',
    label: 'Flowers',
  },
  {
    key: '2',
    label: 'Others',
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
            Manage your tabs, categories and products
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Bulk create products
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Assigning modifiers
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

      <Row>
        <Col span={24}>
          <Card>
            <Row>
              <Col>
                <span style={{ marginRight:20 }}>Tab</span>
                <Button
                  shape="circle"
                  className='mr10'><EditOutlined /></Button>
                <Button
                  shape="circle"
                  className='mr10'><OrderedListOutlined /></Button>
              </Col>
              <Col style={{ flex:1, textAlign:'right' }}>
                <Button
                  type="default"
                  className='btn-rect'>Price Tier</Button>
                <Button
                  type="default"
                  className='btn-rect'>Modifiers</Button>
                <Button
                  type="default"
                  className='btn-rect'>Archive</Button>
                <Button
                  type="default"
                  className='btn-rect'>Shortcut</Button>
                <Button
                  type="default"
                  className='btn-rect'>Promotion Bucket</Button>
                <Button
                  type="default"
                  className='btn-rect'>Bulk Action</Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Tabs
                  defaultActiveKey="1"
                  items={items} />
              </Col>
            </Row>
            <Row style={{ marginTop:10 }}>
              <Col>
                <span style={{ marginRight:20 }}>Category</span>
                <Button
                  shape="circle"
                  className='mr10'><PlusOutlined /></Button>
                <Button
                  shape="circle"
                  className='mr10'><OrderedListOutlined /></Button>
                <Button
                  shape="circle"
                  className='mr10'><SearchOutlined /></Button>
              </Col>
              <Col style={{ flex:1, textAlign:'right' }}>
                <Button
                  type="default"
                  className='btn-rect'>Tags</Button>
                <Button
                  type="default"
                  className='btn-rect'
                  icon={<ExportOutlined />}>Export</Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card>
                  <Row gutter={8}>
                    <Col span={8}>
                      <Button
                        type="primary"
                        icon={<img
                          src="/products/1.png"
                          style={{ width:30 }}/>}
                        className='btn-wid-100' > Alaskan Thunder Fuck </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        type="primary"
                        icon={<img
                          src="/products/1.png"
                          style={{ width:30 }}/>}
                        className='btn-wid-100' >  Amnesia Haze </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        type="primary"
                        icon={<img
                          src="/products/1.png"
                          style={{ width:30 }}/>}
                        className='btn-wid-100' > Ice Cream Cake </Button>
                    </Col>
                  </Row>
                  <Row
                    gutter={8}
                    style={{ marginTop:10 }}>
                    <Col span={8}>
                      <Button
                        type="primary"
                        icon={<img
                          src="/products/1.png"
                          style={{ width:30 }}/>}
                        className='btn-wid-100' > Alaskan Thunder Fuck </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        type="primary"
                        icon={<img
                          src="/products/1.png"
                          style={{ width:30 }}/>}
                        className='btn-wid-100' >  Amnesia Haze </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        type="primary"
                        icon={<img
                          src="/products/1.png"
                          style={{ width:30 }}/>}
                        className='btn-wid-100' > Ice Cream Cake </Button>
                    </Col>
                  </Row>
                  <Row
                    gutter={8}
                    style={{ marginTop:10 }}>
                    <Col span={8}>
                      <Button
                        type="primary"
                        icon={<img
                          src="/products/1.png"
                          style={{ width:30 }}/>}
                        className='btn-wid-100' > Alaskan Thunder Fuck </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        type="primary"
                        icon={<img
                          src="/products/1.png"
                          style={{ width:30 }}/>}
                        className='btn-wid-100' >  Amnesia Haze </Button>
                    </Col>
                    <Col span={8}>
                      <Button
                        type="primary"
                        icon={<img
                          src="/products/1.png"
                          style={{ width:30 }}/>}
                        className='btn-wid-100' > Ice Cream Cake </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
            
      </Row>
    </>
  );
};

export default Index;