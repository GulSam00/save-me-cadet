import { instance } from './api';

import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
} from 'firebase/firestore/lite';
import db from '../firebase';

const AllTableService = {
  /**
   * 출석 체크인
   * @param {string} username - 로그인한 유저ID
   * @param {number} date - 날짜
   * @param {{value: string}} body - 출석 상태
   * @returns
   */

  putTableCheckIn: async (username, date, value) => {
    const dayTableRef = doc(db, 'day_table', date);
    const data = { [`${username}.checkIn`]: value };
    let response;
    try {
      response = await updateDoc(dayTableRef, data);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 출석 체크아웃
   * @param {string} username - 로그인한 유저ID
   * @param {number} attendanceId - 출석ID
   * @param {{value: string}} body - 출석 상태
   * @returns
   */
  putTableCheckOut: async (username, date, value) => {
    const dayTableRef = doc(db, 'day_table', date);
    const data = { [`${username}.checkOut`]: value };
    let response;
    try {
      response = await updateDoc(dayTableRef, data);
    } catch (e) {
      alert(e);
    }
    return response;
  },
  /**
   * 출석표 전체를 가져오기
   * @param {string($date)} date - 날짜
   * @returns 해당 날짜의 출석표 정보
   */
  getTable: async date => {
    let response;
    let data;
    const dayTableRef = doc(db, 'day_table', date);
    response = await getDoc(dayTableRef);
    data = response.data();
    const newArray = [];
    for (const key in data) {
      newArray.push({
        username: data[key].username,
        attendance: data[key].attendance,
        role: data[key].role,
        team: data[key].team,
        absentScore: data[key].absentScore,
        checkIn: data[key].checkIn,
        checkOut: data[key].checkOut,
      });
    }

    return newArray;
  },

  updateTable: async (date, data) => {
    let response;
    const dayTableRef = doc(db, 'day_table', date);

    try {
      response = await setDoc(dayTableRef, data, { merge: true });
    } catch (e) {
      return e;
    }
  },
};

export default AllTableService;
