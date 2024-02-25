const isRegexPassword = password => {
  if (password.length < 8 || password.length > 30) {
    return '비밀번호는 8자 이상 30자 이하로 입력해주세요.';
  }
  const num = password.search(/[0-9]/g);
  const lower = password.search(/[a-z]/g);
  const upper = password.search(/[A-Z]/g);
  const spe = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  if (num < 0 || lower < 0 || upper < 0 || spe < 0) {
    return '비밀번호는 영문 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.';
  }
  return '';
};

export default isRegexPassword;
