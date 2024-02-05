export default function MailToModal({ children, title }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden; /* Initially hidden */
        }
        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
