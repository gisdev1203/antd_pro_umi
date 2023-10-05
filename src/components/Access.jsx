import { FC, ReactElement } from 'react';

import { UserConnectedProps } from '@/models/user';

// type Props = {
//   authority: string;
//   children: ReactElement;
//   fallback?: ReactElement;
// } & UserConnectedProps;

//处理页面元素权限的组件
const Access = (props) => {
  const { user, authority, fallback, children } = props;
  const { authority: userAuthority } = user;
  const accessible = userAuthority.some((item) => item === authority);

  let res = null;

  if(accessible) {
    res = children;
  }else if(fallback) {
    res = fallback;
  }

  return res;
};

export default Access;

// export default connect(
//   ({ user }: { user: UserConnectedProps['user'] }) => ({
//     user
//   })
// )(Access);
