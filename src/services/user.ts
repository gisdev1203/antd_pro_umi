import request from '@/utils/request';
import { AUTH, DB } from './firebaseTemp';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { DocumentData, collection, doc, getDoc, setDoc } from 'firebase/firestore';
// Login
export const userLogin = (params: Record<string, string>): Promise<API.LoginResponse> =>  {

  const email: string = params.username;
  const password: string = params.password;

  return signInWithEmailAndPassword(AUTH, email, password)
    .then((userCredential) => {
      // User login successful, you can handle the response accordingly
      const { user } = userCredential;
      // Return the desired response or perform additional actions
      const resonesBodey: API.LoginResponse = {
        data: {
          user: user
        },
        code: 200,
        message: 'Login successful',
      };
      return (resonesBodey);
    })
    .catch((error) => {
      // User login failed, handle the error
      // You can return an error response or perform other actions
      const resonesBodey: API.LoginResponse = {
        data: {
          user: null,
        },
        code: error.code,
        message: error.message,
      };
      return (resonesBodey);
    });
};


// export const userLogin = (params: Record<string, unknown>): Promise<API.LoginResponse> => {
//   // return 
// }
// (
//   request.post('/api/user/login', params)
// );

//获取用户信息
// export const retrieveUserInfo = (): Promise<API.UserInfoResponse> => (
//   request.get('/api/user/info')
// );
export const retrieveUserInfo = (): Promise<API.UserInfoResponse> =>  {
  try {
    onAuthStateChanged(AUTH, async (user) => {
      if (user) {
        const userRef = doc(DB, 'userData', user.uid);

        const docSnap = await getDoc(userRef);

        const profile : DocumentData | undefined = docSnap.data();
        console.log(profile);
        const resonesBody: API.UserInfoResponse = {
          data: {
            clientId: profile?.clientId,
            clientName: profile?.clientName,
            clientDisplayName: profile?.clientDisplayName,
          },
          code: 200,
          message: 'Success',
        };
        return Promise.resolve(resonesBody);
      }
      else {
        const resonesBody: API.UserInfoResponse = {
          data: {
            clientId: '',
            clientName: '',
            clientDisplayName: '',
          },
          code: 400,
          message: 'Faulier',
        };
        return Promise.resolve(resonesBody);
      }        
    });
  } catch (error) {
    console.error(error);
    const resonesBody: API.UserInfoResponse = {
      data: {
        clientId: '',
        clientName: '',
        clientDisplayName: '',
      },
      code: 400,
      message: 'Faulier',
    };
    return Promise.reject(resonesBody);
  }
  const resonesBody: API.UserInfoResponse = {
    data: {
      clientId: '',
      clientName: '',
      clientDisplayName: '',
    },
    code: 400,
    message: 'Faulier',
  };
  return Promise.resolve(resonesBody);
  // const userInfoResponse : API.UserInfoResponse = {
  //   data: {
  //     name: 'string',
  //     avatar: 'string',
  //     userid: 'string',
  //     email: 'string',
  //     signature: 'string',
  //     title: 'string',
  //     group: 'string',
  //     tags: [
  //       { key: 'string', label: 'string' },
  //     ],      
  //     notifyCount: 1,
  //     unreadCount: 1,
  //     country: 'string',
  //     access: 'string',
  //     geographic: {
  //       province: { label: 'string', key: 'string' },
  //       city: { label: 'string', key: 'string' },
  //     },
  //     address: 'string',
  //     phone: 'string',
  //   },
  //   code: 200,
  //   message: 'Success',
  // };
  // return Promise.resolve(userInfoResponse);
};

//获取用户权限
export const retrieveUserAuthority = (): Promise<API.UserAuthorityResponse> => (
  request.get('/api/user/authority')
);

//获取菜单数据
export const retrieveMenuData = (): Promise<API.MenuDataResponse> => (
  request.get('/api/user/menu')
);

//获取用户信息和权限以及菜单
export const retrieveUserInfoAuthorityMenu = (): Promise<API.UserInfoAuthMenuResponse> => (
  Promise.all([
    retrieveUserInfo(),
    retrieveUserAuthority(),
    retrieveMenuData()
  ])
);

//获取用户权限以及菜单
export const retrieveUserAuthorityMenu = (): Promise<API.UserAuthMenuResponse> => (
  Promise.all([
    retrieveUserAuthority(),
    retrieveMenuData()
  ])
);

//logout
// export const userLogout = (): Promise<API.LogoutResponse> => (
//   request.post('/api/user/logout')
// );
export const userLogout = (): Promise<API.LogoutResponse> =>  {
  return AUTH.signOut().then(()=> {

    const LogoutResponse : API.LogoutResponse = {
      data: {
        
      },
      code: 200,
      message: 'Success',
    };

    return Promise.resolve(LogoutResponse);

  }).catch((error)=> {

    const LogoutResponse : API.LogoutResponse = {
      data: {
        
      },
      code: error.code,
      message: error.message,
    };

    return Promise.reject(LogoutResponse);

  });
};

// //获取验证码
// export const retrieveCaptcha = (params: Record<string, string>): Promise<API.CaptchaResponse> => (
//   request.get('/api/user/captcha', { params })
// );
