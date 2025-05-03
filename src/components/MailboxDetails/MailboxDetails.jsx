import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes, letters }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((box) => box._id === parseInt(mailboxId));
  const lettersForMailbox = letters.filter((letter) => letter.mailboxId === parseInt(mailboxId));

  if (!mailbox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div className="mailbox-details">
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {mailbox._id}</p>
      <p><strong>Box Owner:</strong> {mailbox.owner}</p>
      <p><strong>Box Size:</strong> {mailbox.size}</p>

      <h3>Letters</h3>
      {lettersForMailbox.length > 0 ? (
        <ul className="letters-list">
          {lettersForMailbox.map((letter, index) => (
            <li key={index} className="letter-item">
              <strong>Recipient:</strong> {letter.recipient} <br />
              <strong>Message:</strong> {letter.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No letters have been sent to this mailbox yet.</p>
      )}
    </div>
  );
};

export default MailboxDetails;