
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

import { Row, Col,Card, Button, Anchor,Select,Menu,Switch,Tabs,Input,Table } from 'antd';
import  './index.css';

import { QuestionCircleOutlined,LinkOutlined,ExportOutlined } from '@ant-design/icons';

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
};
const { Search } = Input;
const items = [
  {
    key: '0',
    label: 'All Tabs',
  },
  {
    key: '1',
    label: 'Flowers',
  },
  {
    key: '2',
    label: 'Others',
  }
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
    title: 'Product Name',
    dataIndex: 'ProductName',
    key: 'ProductName'
  },
  {
    title: 'Barcode',
    dataIndex: 'Barcode',
    key: 'Barcode'
  },
  {
    title: 'SKU Number',
    dataIndex: 'SKU Number',
    key: 'SKU Number'
  },
  {
    title: 'Category',
    dataIndex: 'Category',
    key: 'Category'
  },
  {
    title: 'Tab',
    dataIndex: 'Tab',
    key: 'Tab'
  },
  {
    title: 'Tags',
    dataIndex: 'Tags',
    key: 'Tags'
  },
  {
    title: 'In Stock',
    dataIndex: 'In Stock',
    key: 'In Stock'
  },
  {
    title: 'Low Stock Threshold',
    dataIndex: 'Low Stock Threshold',
    key: 'Low Stock Threshold'
  },
  {
    title: 'Unit Price',
    dataIndex: 'UnitPrice',
    key: 'Unit Price'
  },
  {
    title: 'Unit Cost',
    dataIndex: 'UnitCost',
    key: 'UnitCost'
  },
  {
    title: 'Stock Value',
    dataIndex: 'StockValue',
    key: 'StockValue'
  }
];

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
            Tracking inventory on HQ
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Tracking inventory on app
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Bulk update inventory count
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
            Shopify & WooCommerce integrations
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
        <Col 
          className='block-switch'
        >
          <span>LOW STOCK ALERT</span><Switch defaultChecked/>
        </Col>
        <Col>
          <Button
            type="default"
            className='btn-rect'>Transfer Stock</Button>
        </Col>
      </Row>
      <Row style={{ marginTop:15 }}>
        <Col span={24}>
          <Card>
            <Row>
              <Col>
                <span style={{ marginRight:20 }}>Tab</span>
              </Col>
                    
            </Row>
            <Row>
              <Col span={24}>
                <Tabs
                  defaultActiveKey="0"
                  items={items} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Search
                  placeholder="Search"
                  className="btn-react"
                  style={{ width: 200 }}/>
              </Col>
              <Col style={{ flex:1, textAlign:'right' }}>
                <div className='filter-swtich'><Switch defaultChecked/><span>LOW STOCK ALERT</span></div>
                <Button
                  type="default"
                  className='btn-rect1'>Category Filter</Button>
                <Button
                  type="default"
                  className='btn-rect1'>Bulk Update</Button>
                <Button
                  type="default"
                  className='btn-rect1'
                  icon={<ExportOutlined/>}>EXPORT</Button>
              </Col> 
            </Row>
            <Row>
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