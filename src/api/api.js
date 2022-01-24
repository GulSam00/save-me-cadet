import axios from 'axios';
const apiUrl = "http://42save-be.ap-northeast-2.elasticbeanstalk.com";

const instance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,

});

export const testAPI = async () => {
  return await axios({
    url: apiUrl,
    method: 'get',
    withCredentials: true,

  });
};


export const testAttendence = async () => {
  return await instance.get(`/attendence`);
};