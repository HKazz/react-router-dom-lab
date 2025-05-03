import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [formData, setFormData] = useState({ mailboxId: '', recipient: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'mailboxId' ? parseInt(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter(formData);
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Send a New Letter</h2>
      <label>
        Mailbox:
        <select name="mailboxId" value={formData.mailboxId} onChange={handleChange} required>
          <option value="" disabled>Select a mailbox</option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>{mailbox.owner}</option>
          ))}
        </select>
      </label>
      <label>
        Recipient:
        <input type="text" name="recipient" value={formData.recipient} onChange={handleChange} required />
      </label>
      <label>
        Message:
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </label>
      <button type="submit">Send Letter</button>
    </form>
  );
};

export default LetterForm;