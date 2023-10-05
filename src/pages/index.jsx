import { PureComponent } from 'react';
// import { connect } from 'umi';
// import  { UserConnectedProps } from '@/models/user';
import { history, useModel, useIntl } from 'umi';

const Index = () => {
  const authModel = useModel('authModel');
  console.log('authModel');
  console.log(authModel);
  console.log('authModel');
  return (
    <>
      <div>{'name'}</div>
    </>
  );
};

export default Index;

// class Index extends PureComponent<UserConnectedProps> {

//   render() {
//     const { user } = this.props;
//     console.log(user);
//     const { data } = user;
//     // const { name } = data;

//     return (
//       <div>{'name'}</div>
//     );
//   }
// };

// export default connect(
//   ({ user }: { user: UserConnectedProps['user'] }) => ({
//     user
//   })
// )(Index);
