import type { FC } from 'react';
import { history } from 'umi';
import { Button, Result } from 'antd';

const _404: FC = () => {

  return (
    <Result
      title="404"
      status="404"
      subTitle="Sorry, the page you visited does not exist"
      extra={(
        <Button
          type="primary"
          onClick={
            () => history.push('/')
          }
        >return home</Button>
      )}
    />
  );
};

export default _404;
