/* import React, { useState } from 'react';

const isValidPassword = (password) => {
  // 비밀번호는 특수문자와 숫자가 각각 하나 이상 포함된 8자리 이상의 문자열로 설정됨
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
};

const AdminPasswordForm = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPassword(password)) {
      setError('비밀번호가 유효하지 않습니다. 특수문자와 숫자가 각각 하나 이상 포함된 8자리 이상의 문자열이어야 합니다.');
      return;
    }
    onPasswordSubmit(password);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    if (error) setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        관리자 비밀번호:
        <input
          type="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">확인</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AdminPasswordForm;
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
};

const AdminPasswordForm = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPassword(password)) {
      setError('비밀번호가 유효하지 않습니다. 특수문자와 숫자가 각각 하나 이상 포함된 8자리 이상의 문자열이어야 합니다.');
      return;
    }
    onSubmit(password);
    navigate('/admin');
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    if (error) setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        관리자 비밀번호:
        <input
          type="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">확인</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AdminPasswordForm;
