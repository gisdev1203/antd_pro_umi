import { FC } from 'react';
import { useState, useEffect } from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';
import { MenuProps } from 'antd';
import { Outlet, Link, useLocation, useModel} from 'umi';
import PageAccess from '@/components/PageAccess';
import { UserConnectedProps } from '@/models/user';
import LayoutWrapper from '@/components/LayoutWrapper';
import Nav from '@/components/Nav';
import Page404 from '@/pages/404';
import handleRecursiveNestedData from '@/utils/handleRecursiveNestedData';
import handleGetCurrentLocation from '@/utils/handleGetCurrentLocation';

import dayjs from 'dayjs';
import { Locale } from 'antd/es/locale';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
dayjs.locale('en');


const { Header, Content, Sider } = Layout;

/**
 * 获取openKeys的方法
 * @param currentLocation 当前位置, 由handleGetCurrentLocation方法返回
 * @returns openKeys
 */
const handleGetOpenKeys = (currentLocation) => {
  //currentLocation为空
  if(!currentLocation.length) return [ '' ];

  //currentLocation只有一项
  if(currentLocation.length === 1) {
    return currentLocation.map((item) => `${item.key}`);
  }

  const res = [];

  //currentLocation有多项, 只要前n-1项
  for (let i = 0; i < currentLocation.length - 1; i++) {
    res.push(`${currentLocation[i].key}`);
  }

  return res;
};

//自定义的layout页面, 顶部导航通栏+侧边栏(菜单)布局, 可根据需要做调整
const BasicLayout = (props) => {
  const [ collapsed, setCollapsed ] = useState(false);
  const [ openKeys, setOpenKeys ] = useState([ '' ]);
  const [ locale, setLocal ] = useState(enUS);

  const { pathname } = useLocation();
  const {
    user: {
      menu, rootSubmenuKeys, indexAllMenuItemById,
      indexValidMenuItemByPath
    }
  } = props;
  const validMenuItem = indexValidMenuItemByPath[pathname];
  const selectedKeys = validMenuItem?.key;

  useEffect(
    () => {

      setOpenKeys(
        handleGetOpenKeys(
          handleGetCurrentLocation(indexValidMenuItemByPath[pathname], indexAllMenuItemById)
        )
      );
    },
    [ pathname, indexAllMenuItemById, indexValidMenuItemByPath ]
  );

  useEffect(()=>{
    setLocal(enUS);
    dayjs.locale('en');
  }, []);

  //Menu中的selectedKeys和openKeys不是一回事:
  //openKeys:
  //当前展开的SubMenu菜单项key数组, 有子菜单的父菜单, 当selectedKeys为没子菜单的父菜单时该值应该设为[''],
  //也就是关闭所有有子菜单的父菜单;
  //selectedKeys:
  //当前选中的菜单项key数组, 有子菜单则是子菜单(叶子节点), 没有子菜单则是父菜单(一级菜单), 始终是可选中的

  //点击有子菜单的父菜单的回调
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    
    if(rootSubmenuKeys.indexOf(`${latestOpenKey}`) === -1) {
      setOpenKeys(keys);
    }else{
      setOpenKeys(latestOpenKey ? [ latestOpenKey ] : [ '' ]);
    }
  };

  //All MenuItems:
  //There are children: there must be a path, the label does not move, and the label under the children is changed to <Link to={path} />
  //Without children: the label with path is changed to <Link to={path} />, the label without path does not move
  const consumableMenu = handleRecursiveNestedData(
    menu,
    (item) => ({
      ...item,
      label: item.path
        ? (
          <Link
            to={item.path}
            style={{ color: 'inherit' }}
          >{item.label}</Link>
        )
        : item.label
    })
  ).filter((item) => !item.hideInMenu);

  console.log(consumableMenu);


  return (
    <ConfigProvider locale={locale}>
      <LayoutWrapper>
        <Layout style={{ minHeight: '100vh' }}>
          <Header
            style={{
              padding: '0',
              height: 'auto'
            }}
          >
            <Nav />
          </Header>
          <Layout>
            <Sider
              collapsible
              theme="light"
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
            >
              <Menu
                mode="inline"
                openKeys={openKeys}
                items={consumableMenu}
                onOpenChange={onOpenChange}
                selectedKeys={[ selectedKeys ]}
              />
            </Sider>
            <Layout>
              <Content style={{ margin: '0 16px' }}>
                {
                  //统一对所有有效路由做页面鉴权的处理
                  validMenuItem
                    ? (
                      <PageAccess>
                        <Outlet />
                      </PageAccess>
                    )
                    //这里不再使用<Outlet />是因为当一条路由在菜单接口中没有返回, 但实际项目中创建了,
                    //此时访问应该显示404页面; 菜单中没有, 实际项目中有表示这条路由/页面当前登录用户无法访问,
                    //而如果继续使用<Outlet />则那条路由/页面依旧会被渲染, 因为对于umi来说这条路由/页面是有效的,
                    //是存在的, 而对于本项目来说则不是
                    : <Page404 />
                }
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </LayoutWrapper>
    </ConfigProvider>
  );
};

export default BasicLayout;

// export default connect(
//   ({ user }: { user: UserConnectedProps['user'] }) => ({
//     user
//   })
// )(BasicLayout);
