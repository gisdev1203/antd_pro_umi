import type { FC } from 'react';
import { useState, Fragment } from 'react';
import { notification, Tabs } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification/interface';

import { connect } from 'umi';
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';

import { ProFormCaptcha, ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-components';
import Footer from '@/components/Footer';
import { retrieveCaptcha } from '@/services/user';
import type { UserConnectedProps } from '@/models/user';
import styles from './index.less';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Index: FC<UserConnectedProps> = (props) => {
  const [ type, setType ] = useState<string>('account');
  const { user, dispatch } = props;
  //notification
  const [ api, contextHolder ] = notification.useNotification();

  const openNotificationWithIcon = (message: string) => {
    notification.error({
      message: message,
    });
    // api[type]({
    //   message: 'Notification Title',
    //   description:
    //     'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    // });
  };

  const handleSubmit = async (values: API.LoginParams) => {
    dispatch?.({
      type: 'user/login',
      payload: values
    });
  };

  const { loginBtnLoading, errorMSG } = user;

  return (
    <>      
      {errorMSG !== ''? openNotificationWithIcon(errorMSG): (<></>)}
      <div className={styles.container}>
        <div className={styles.content}>
          <LoginForm
            logo={
              <img
                alt="logo"
                src="/logo.svg"
              />
            }
            title="DispenaryPOS"
            subTitle="Ant Design"
            initialValues={{
              autoLogin: true
            }}
            submitter={{
              submitButtonProps: {
                loading: loginBtnLoading
              }
            }}
            
            onFinish={async (values: API.LoginParams) => {
              await handleSubmit(values as API.LoginParams);
            }}
          >
            {/* <Tabs
              centered
              activeKey={type}
              onChange={setType}
              items={[
                // {
                //   key: 'account',
                //   label: '账户密码登录'
                // },
                // {
                //   key: 'mobile',
                //   label: '手机号登录'
                // }
              ]}
            /> */}
            {type === 'account' && (
              <Fragment>
                <ProFormText
                  name="username"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder="email@gmai.com"
                  rules={[
                    {
                      required: true,
                      message: 'please enter user email!',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder="password"
                  rules={[
                    {
                      required: true,
                      message: 'please enter password',
                    },
                  ]}
                />
              </Fragment>
            )}
            
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <ProFormCheckbox
                noStyle
                name="autoLogin">
                Auto Login
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
              >
                Forget the password
              </a>
            </div>
          </LoginForm>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default connect(
  ({ user }: { user: UserConnectedProps['user'] }) => ({
    user
  })
)(Index);
