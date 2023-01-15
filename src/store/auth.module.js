import AuthService from '../services/auth.service';
import TokenService from "@/services/token.service";

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      let model = {
        login: '',
        role: ''
      }
      if((user.login === 'Customer1' && user.password === 'Customer1') || (user.login === 'Customer2' && user.password === 'Customer2')) {
        model.login = user.login
        model.role = 'role1'
        commit('loginSuccess', model);
        TokenService.setUser(model);
        return Promise.resolve(model);
      } else {
        commit('loginFailure');
        return Promise.reject({
          error: 'Login or password is incorrect'
        });
      }
    },
    logout({ commit }) {
      commit('logout');
      TokenService.removeUser();
    },

    verify({ commit }, token) {
      return AuthService.verify(token).then(
          response => {
            commit('verificationSuccess');
            return Promise.resolve(response.data);
          },
          error => {
            commit('verificationFailure');
            return Promise.reject(error);
          }
      );
    },
    getUserDetails({ commit } ,userId) {
      return AuthService.getUserDetails(userId).then(
          user => {
            commit('userFound', user);
            return Promise.resolve(user);
          },
          error => {
            return Promise.reject(error);
          }
      );
    },
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    userFound(state, user) {
      state.foundUser = user;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    updateSuccess(state) {
      state.status.loggedIn = true;
    },
    uploadSuccess(state) {
      state.status.docsUploaded = true;
    },
    uploadFailure(state) {
      state.status.docsUploaded = false;
    },
    updateFailure(state) {
      state.status.loggedIn = true;
    },
    refreshToken(state, jwtToken) {
      state.status.loggedIn = true;
      state.user = { ...state.user, jwtToken: jwtToken };
    }
  }
};
