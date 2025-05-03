// src/App.jsx

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newMailbox) => {
    setMailboxes([...mailboxes, newMailbox]);
  };

  const addLetter = (newLetter) => {
    setLetters([...letters, newLetter]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} letters={letters} />} />
        <Route path="/new-letter" element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />} />
      </Routes>
    </>
  );
};

export default App;
