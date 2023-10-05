import type { Request, Response } from 'express';

const waitTime = (time: number = 100) => (
  new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(true);
      },
      time
    )
  })
);

const handleCommonRes = (data: Record<string, unknown> | Record<string, unknown>[], code = 0) => ({
  data,
  code,
  message: !code ? 'success' : 'failure'  
});

const userApi = {
  //登录
  'POST /api/user/login': async (req: Request, res: Response) => {
    const { password, username, mobile, captcha } = req.body;
    await waitTime(2000);

    switch(true) {
      case username === 'admin' && password === 'ant.design':
      case username === 'user' && password === 'ant.design':
      case /^1\d{10}$/.test(mobile) && Boolean(captcha):
        res.send(
          handleCommonRes({
            token: 'Bearer xxx'
          })
        );
        return;
    }

    res.send(
      handleCommonRes(
        {
          token: 'Wrong Bearer'
        },
        10001
      )
    );
  },
  //用户信息
  'GET /api/user/info': async (req: Request, res: Response) => {
    await waitTime(2000);

    if(!req.headers.authorization) {
      res.status(401).send();
      return;
    }

    res.send(
      handleCommonRes({
        name: 'Serati Ma',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email: 'antdesign@alipay.com',
        signature: '海纳百川，有容乃大',
        title: '交互专家',
        group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags: [
          {
            key: '0',
            label: '很有想法的',
          },
          {
            key: '1',
            label: '专注设计',
          },
          {
            key: '2',
            label: '辣~',
          },
          {
            key: '3',
            label: '大长腿',
          },
          {
            key: '4',
            label: '川妹子',
          },
          {
            key: '5',
            label: '海纳百川',
          },
        ],
        notifyCount: 12,
        unreadCount: 11,
        country: 'China',
        geographic: {
          province: {
            label: '浙江省',
            key: '330000',
          },
          city: {
            label: '杭州市',
            key: '330100',
          },
        },
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
      })
    );
  },
  //用户权限
  'GET /api/user/authority': async (req: Request, res: Response) => {
    await waitTime(1500);

    res.send(
      handleCommonRes({
        authority: [          
          '/',
          '/Reports',
          '/Dashboard',
          '/CustomerSurveyResults',
          '/Cash',
          '/Transactions',
          '/Invoice',
          '/Products',
          '/Inventory',
          '/Ingredient',
          '/Discount',
          '/Staff',
          '/TimeCard',
          '/Customer',
          // '/about/u/1',
          // '/about/u/2',
          // '/about/m',
          // '/about/um',
          // '/teacher/u',
          // '/teacher/m',
          // '/teacher/um',
          // '/student',
          // '/about/m/update'
        ]
      })
    );
  },
  //菜单
  'GET /api/user/menu': async (req: Request, res: Response) => {
    await waitTime(1000);

    res.send(
      handleCommonRes([
        {
          id: 1,
          key: '1',
          path: '/',
          redirect: '/Reports',
          label: 'Reports',
          children: [
            {
              id: 11,
              key: '1-1',
              path: '/Reports',
              label: 'Reports',
              redirect: '',
              pid: 1
            },
            {
              id: 12,
              key: '1-2',
              path: '/Dashboard',
              label: 'Dashboard',
              redirect: '',
              pid: 1
            },
            {
              id: 13,
              key: '1-3',
              path: '/CustomerSurveyResults',
              label: 'Customer Survey Results',
              redirect: '',
              pid: 1
            },
            {
              id: 14,
              key: '1-4',
              path: '/Cash',
              label: 'Cash Management',
              redirect: '',
              pid: 1
            },
          ],
        },
        {
          id: 2,
          key: '2',
          label: 'Transactions',
          path: '/Transactions',
          redirect: '',
          // hideInMenu: false,
          children: [
            {
              id: 21,
              key: '2-1',
              label: 'Transactions',
              path: '/Transactions',
              redirect: '',
              pid: 2,              
            },
            {
              id: 22,
              key: '2-2',
              path: '/Invoice',
              redirect: '',
              label: 'Invoice Management',
              pid: 2
            },            
          ]
        },
        {
          id: 3,
          key: '3',
          label: 'Product Management',
          path: '',
          redirect: '',
          children: [
            {
              id: 31,
              key: '3-1',
              path: '/Products',
              redirect: '',
              label: 'Product Management',
              pid: 3
            },
            {
              id: 32,
              key: '3-2',
              path: '/Inventory',
              redirect: '',
              label: 'Inventory Management',
              pid: 3
            },
            {
              id: 33,
              key: '3-3',
              path: '/Ingredient',
              redirect: '',
              label: 'Ingredient Management',
              pid: 3
            }
          ]
        },
        {
          id: 4,
          key: '4',
          label: 'Discount Management',
          path: '/Discount',
          redirect: '',
        },
        {
          id: 5,
          key: '5',
          label: 'Staff Management',
          path: '/Staff',
          redirect: '/Staff',
          children: [
              {
              id: 51,
              key: '5-1',
              path: '/Staff',
              label: 'Staff Management',
              redirect: '',
              pid: 5,
            },
            {
              id: 52,
              key: '5-2',
              path: '/TimeCard',
              label: 'Time Card',
              redirect: '',
              pid: 5,
            },
          ],
        },
        {
          id: 6,
          key: '6',
          label: 'Customer Management',
          path: '/Customer',
          redirect: '',
        },
      ])
    );
  },
  //登出
  'POST /api/user/logout': (req: Request, res: Response) => {
    res.send(
      handleCommonRes({})
    );
  },
  //验证码
  'GET /api/user/captcha': async (req: Request, res: Response) => {
    await waitTime(2000);
    return res.send(
      handleCommonRes({
        captcha: 'captcha-xxx'
      })
    );
  }
};

export default userApi;
