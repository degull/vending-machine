import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Main from './components/Main/Main';
import Detail from './components/Detail/Detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        {/* detail page */}
        <Route path='/Detail/Detail' element={<Detail />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;