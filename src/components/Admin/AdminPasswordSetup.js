import React, { useState } from 'react';
import AdminPasswordForm from './AdminPasswordForm';

const AdminPasswordSetup = () => {
  const [adminPassword, setAdminPassword] = useState('');

  const handlePasswordSubmit = (password) => {
    setAdminPassword(password);
    // 이후 필요한 작업을 수행할 수 있습니다.
  };

  return (
    <div>
      <h2>관리자 비밀번호 설정</h2>
      <AdminPasswordForm onPasswordSubmit={handlePasswordSubmit} />
    </div>
  );
};

export default AdminPasswordSetup;
