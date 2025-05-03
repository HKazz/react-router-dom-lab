import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailbox List</h2>
      <div className="mailbox-grid">
        {mailboxes.map((mailbox) => (
          <Link 
            to={`/mailboxes/${mailbox._id}`} 
            key={mailbox._id} 
            className="mail-box"
          >
            {mailbox._id}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;