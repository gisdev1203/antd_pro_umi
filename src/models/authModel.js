import { history } from 'umi';
import firebaseService from '@/services/firebaseService';

const initState = {
  loading: false,
  isAuthenticating: false,
  authStatus: null,
  errorMessage: '',
//   requestStatus: null,
//   theme: 'light'
};

export default {
  namespace: 'authModel',
  state: initState,
  effects: {
    *login({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          loading: true,
          isAuthenticating: false,
          errorMessage: '',
        }
      });
      const res = yield call(firebaseService.signIn, payload.email, payload.password);
      console.log(res);
        

    },

    // handleError(e, put) {
    //   const obj = { success: false, type: 'auth', isError: true };
    //   yield put(authStatus(false));
        
    //   switch (e.code) {
    //     case 'auth/network-request-failed':
    //       yield put(type: 'authStatus', playload: authStatus({ ...obj, message: 'Network error has occured. Please try again.' }));
    //       break;
    //     case 'auth/email-already-in-use':
    //       yield put(authStatus({ ...obj, message: 'Email is already in use. Please use another email' }));
    //       break;
    //     case 'auth/wrong-password':
    //       yield put(authStatus({ ...obj, message: 'Incorrect email or password' }));
    //       break;
    //     case 'auth/user-not-found':
    //       yield put(authStatus({ ...obj, message: 'Incorrect email or password' }));
    //       break;
    //     case 'auth/reset-password-error':
    //       yield put(authStatus({ ...obj, message: 'Failed to send password reset email. Did you type your email correctly?' }));
    //       break;
    //     default:
    //       yield put(authStatus({ ...obj, message: e.message }));
    //       break;
    //   }
    // },

    // async fetchData(payload, rootState) {
    //   // Perform asynchronous operations here
    //   // For example, make an API call
    //   const response = await fetch('https://api.example.com/data');
    //   const data = await response.json();

    //   // Update the state using reducers
    //   this.someReducer(data);
    // },
  },
  reducer: {
    save(state, action) {
      return {
        ...state,
        ...action.payload
      };
    }
    // loadingState(state, { payload }){
    //   state.loading = payload;
    // },
    // isAuthenticating(state, { payload }) {
    //   state.isAuthenticating = payload;
    // },
    // authStatus(state, { payload }){
    //   state.authStatus = payload;
    // },
    // updateState(state, { payload }) {
    //   return {
    //     ...state,
    //     ...payload,
    //   };
    // },
  }
};