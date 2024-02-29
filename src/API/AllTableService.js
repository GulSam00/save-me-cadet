import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
} from 'firebase/firestore/lite';
import db from '../firebase';

// putTableCheckIn: async (username, date, value) => {
//   const dayTableRef = doc(db, 'day_table', date);
//   const score = transScore(value);
//   let data = { [`${username}.checkIn`]: value };
//   let response;
//   if (score !== 0) {
//     const userRef = doc(db, 'user', username);
//     const user = await getDoc(userRef);
//     const userData = user.data();
//     if (score === 1) {
//       userData.attendanceScore += 1;
//     } else if (score === -0.5) {
//       userData.absentScore += 0.5;
//     } else {
//       userData.absentScore += 1;
//     }
//     await setDoc(userRef, userData);
//      data = { [`${username}.checkIn`]: value, [`${username}.attendanceScore`]: userData.attendanceScore, [`${username}.absentScore`]: userData.absentScore };
//   }

//   try {
//     response = await updateDoc(dayTableRef, data);
//   } catch (e) {
//     alert(e);
//   }
//   return response;
// },

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
        attendanceScore: data[key].attendanceScore,
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

  initTable: async date => {
    const dayTableRef = doc(db, 'day_table', date);
    const allParticipants = await getDocs(collection(db, 'user'));
    try {
      Promise.all(
        allParticipants.forEach(async doc => {
          const data = doc.data();
          if (data.attendance === '참가') {
            const body = {
              [`${data.username}.username`]: data.username,
              [`${data.username}.attendance`]: data.attendance,
              [`${data.username}.role`]: data.role,
              [`${data.username}.team`]: data.team,
              [`${data.username}.absentScore`]: data.absentScore,
              [`${data.username}.attendanceScore`]: data.attendanceScore,
            };
            await updateDoc(dayTableRef, body);
          }
        }),
      );
      return 0;
    } catch (e) {
      return e;
    }
  },
};

export default AllTableService;
