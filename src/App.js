import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mail/mailSlice';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <div className="app">
      <Header />

      {/* ---------------------- */}
      <Router>
        <div className='app__body'>
          <Sidebar />
          <Routes>
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </Router>
      {/* ---------------------- */}
    </div>
  );
}

export default App;
