/* import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Detail from './components/Detail/Detail';
import AdminPasswordForm from './components/Admin/AdminPasswordForm';
import AdminPage from './components/Admin/AdminPage';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handlePasswordSubmit = (password) => {
    if (password === 'yoon1568!') {
      setIsAdmin(true);
    } else {
      alert('올바르지 않은 비밀번호입니다.');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/admin-password" element={<AdminPasswordForm onSubmit={handlePasswordSubmit} />} />
        <Route path="/admin" element={isAdmin ? <AdminPage onLogout={handleLogout} /> : <AdminPasswordForm onSubmit={handlePasswordSubmit} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Detail from './components/Detail/Detail';
import AdminPasswordForm from './components/Admin/AdminPasswordForm';
import AdminPage from './components/Admin/AdminPage';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handlePasswordSubmit = (password) => {
    // 비밀번호 확인 로직
    if (password === 'yoon1568!') {
      setIsAdmin(true);
    } else {
      alert('올바르지 않은 비밀번호입니다.');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route
          path="/admin-password"
          element={<AdminPasswordForm onPasswordSubmit={handlePasswordSubmit} />}
        />
        {isAdmin && <Route path="/admin" element={<AdminPage onLogout={handleLogout} />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
