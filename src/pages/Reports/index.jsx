

import { Row, Col,Card, Button, Anchor,Select,Menu,Switch,Table } from 'antd';
import { QuestionCircleOutlined,LinkOutlined,CalendarOutlined,MailOutlined,ExportOutlined,SoundTwoTone} from '@ant-design/icons';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

import './index.less';

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
};
const dataSource = [
  {
    key: '1',
    name: 'Total Sales',
    price: '฿6063.00',
    rowExpandable: true,
    children: [
      {
        key: '1-1',
        name: 'Net Sales',
        price: '฿5666.35',
        children: [
          {
            key: '1-1-1',
            name: 'Gross Sales',
            Price: '฿6197.48'
          },
          {
            key: '1-1-2',
            name: 'Total Discount Given',
            Price: '-฿590.00'
          }
        ]
      },
      {
        key: '1-2',
        name: 'Total VAT',
        price: '฿396.65',
        rowExpandable: true // Set rowExpandable to true for this row
      }
    ]
  },
  {
    key: '2',
    name: 'Total Cost',
    price: '฿0.00',
  },
  {
    key: '3',
    name: 'Gross Profit',
    price: '฿5607.48',
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

const columns = [
  {
    title: '',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '',
    dataIndex: 'price',
    key: 'price'
  }
];


const columns1 = [
  {
    title: 'Discount Name',
    dataIndex: 'discount',
    key: 'discount'
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity'
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
  },
  {
    title: 'Discount Per Transaction',
    dataIndex: 'dptransaction',
    key: 'dptransaction'
  }
];

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
          Understanding your sales report
          </Button>
        </Col>
        <Col>
          <Button
            type="default"
            icon={<QuestionCircleOutlined />}>
          Automatically receive daily sales report
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
      </Row><Row style={{ marginTop: 15 }}>
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
            ]} />
        </Col>
        <Col
          className='block-switch'
        >
          <span>ALL STORES</span><Switch defaultChecked />
        </Col>
      </Row><Row
        style={{ marginTop: 15 }}
      >
        <Col>
          <Button
            icon={<CalendarOutlined />}
            className='btn-calendar'
          >
            20/06/2023 22:31:00  ~ 20/06/2023 23:59:59
          </Button>
        </Col>
        <Col style={{ marginLeft: 10 }}>
          <Button
            icon={<CalendarOutlined />}
            className='btn-calendar'
          >
            DAY SPLIT VIEW
          </Button>
        </Col>
        <Col
          style={{ flex: 1, textAlign: 'right' }}
        >
          <Button
            icon={<MailOutlined />}
            className='btn-calendar'
            style={{ marginRight: 10 }}
          >
            EMAIL
          </Button>
          <Button
            icon={<ExportOutlined />}
            className='btn-calendar'
          >
            EXPORT
          </Button>
        </Col>
      </Row><Row
        gutter={16}
        style={{ marginTop: 15 }}
      >
        <Col span={12}>
          <Card
            title="Sales Information"
            bordered={false}
            extra={<Button type="default"><SoundTwoTone /></Button>}
          >
            <Table
              dataSource={dataSource}
              columns={columns} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Discount Information"
            bordered={false}
          >
            <Table
              dataSource={dataSource1}
              columns={columns1} />
          </Card>
        </Col>
      </Row><Row
        gutter={16}
        style={{ marginTop: 15 }}>
        <Col span={12}>
          <Card
            title="Sales by Modifier"
            bordered={false}
          >
            <Table
              dataSource={dataSource1}
              columns={columns1} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Sales by Tag"
            bordered={false}
          >
            <Table
              dataSource={dataSource1}
              columns={columns1} />
          </Card>
        </Col>
      </Row><Row
        gutter={16}
        style={{ marginTop: 15 }}>
        <Col span={12}>
          <Card
            title="Sales by Employee"
            bordered={false}
          >
            <Table
              dataSource={dataSource1}
              columns={columns1} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Sales by Combo"
            bordered={false}
          >
            <Table
              dataSource={dataSource1}
              columns={columns1} />
          </Card>
        </Col>
      </Row><Row style={{ marginTop: 15 }}>
        <Col span={24}>
          <Card
            title="Hourly Sales (Wednesday 21/06/2023)"
            bordered={false}>
            <ReactEcharts
              echarts={echarts}
              option={option} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Index;
