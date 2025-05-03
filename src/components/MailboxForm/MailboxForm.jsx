import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({ owner: '', size: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMailbox = {
      ...formData,
      _id: Date.now(), // Assign a unique ID based on timestamp
    };
    addBox(newMailbox);
    navigate('/mailboxes');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create a New Mailbox</h2>
      <label>
        Box Owner:
        <input type="text" name="owner" value={formData.owner} onChange={handleChange} required />
      </label>
      <label>
        Box Size:
        <select name="size" value={formData.size} onChange={handleChange} required>
          <option value="" disabled>Select a size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Add Mailbox</button>
    </form>
  );
};

export default MailboxForm;