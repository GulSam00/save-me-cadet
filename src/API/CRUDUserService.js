import { instance } from './api';
import {
  TEAM_ID,
  PARTICIPATE_NAME,
  TEAM_NAME,
  ROLE_NAME,
} from 'Utils/constants';

const CRUDUserAPI = path => {
  return `/${path}`;
};

import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  updateDoc,
} from 'firebase/firestore/lite';
import db from '../firebase';

const CRUDUserService = {
  /**
   * 유저 정보 읽기
   * @param {username : string} id
   * @returns
   */
  getUser: async username => {
    try {
      const userRef = doc(db, 'user', username);
      const userDocs = await getDoc(userRef);
      return userDocs.data();
    } catch (e) {
      return null;
    }
  },

  getAllUser: async () => {
    let response = [];
    try {
      const userCollectionRef = collection(db, 'user');
      const userDocs = await getDocs(userCollectionRef);

      userDocs.forEach((doc, i) => {
        response.push({ id: i + 1, ...doc.data() });
      });
    } catch (e) {
      return null;
    }
    return response;
  },

  /**
   * 회원가입
   * @param {{username: string, password: string}} body - username은 42 intra id
   * @returns
   */
  postUser: async body => {
    let response;

    try {
      const userRef = doc(db, 'user', body.username);
      const data = {
        username: body.username,
        password: body.password,
        attendance: PARTICIPATE_NAME.PARTICIPATED,
        role: ROLE_NAME.ROLE_MANAGER,
        team_id: TEAM_ID.ALL,
        team: TEAM_NAME.NONE,
        absentScore: 0,
        attendanceScore: 0,
      };
      response = await setDoc(userRef, data, { merge: true });
    } catch (e) {
      return -1;
    }
    return 0;
  },
  /**
   * 로그인
   * @param {{username: string, password: string}} body - username은 42 intra id
   * @returns
   */
  postLogin: async body => {
    let response;
    let data;
    try {
      let userRef;
      userRef = doc(db, 'user', body.username);

      response = await getDoc(userRef);

      data = response.data();
      if (data.password === body.password) return data;
    } catch (e) {
      return null;
    }
  },
  /**
   * 로그아웃
   * @returns
   */
  postLogout: async () => {
    const url = CRUDUserAPI('auth/logout');
    let response;
    try {
      response = await instance.post(url);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  /**
   * 비밀번호 변경
   * @param {string} oldPassword
   * @param {string} newPassword
   * @param {string} checkPassword
   * @returns
   */
  updateUser: async (username, body) => {
    const userRef = doc(db, 'user', username);
    let response;
    try {
      response = await updateDoc(userRef, body);
    } catch (e) {
      alert(e);
    }
    return response;
  },

  updatePassword: async (oldPassword, newPassword, checkPassword) => {
    const url = CRUDUserAPI('auth/password');
    let response;
    try {
      response = await instance.patch(url, {
        oldPassword,
        password: newPassword,
        checkPassword,
      });
    } catch (e) {
      return null;
    }
    return response;
  },
};

export default CRUDUserService;
