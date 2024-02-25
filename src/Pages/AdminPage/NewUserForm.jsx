import { useState } from 'react';

import Button from '@mui/material/Button';

const NewUserForm = ({ onClickLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onSubmitUser = () => {
    if (name === '' || email === '') {
      alert('이름과 이메일을 입력하세요!');
      return;
    }
    onClickLogin({
      username: name,
      email: email, // 중복되면 안됨.
      password: '4242',
      birthday: '2022-02-18',
    });
    setName('');
    setEmail('');
  };
  return (
    <div className="box">
      <form onSubmit={onSubmitUser}>
        <h1>신규 유저 생성</h1>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={e => handleChangeName(e)}
        />
        <input
          type="text"
          placeholder="이메일"
          value={email}
          onChange={e => handleChangeEmail(e)}
        />
        <Button onClick={onSubmitUser}>입력</Button>
      </form>
    </div>
  );
};

export default NewUserForm;
