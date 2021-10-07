import "./SystemMessage.css";

function SystemMessage({ value, posttime, message }) {
  return (
    <div className="message system-message">
      <div class="message-content">
        <div className="message-header message-header-system">
          <h4>{value}</h4>
          <p>{posttime}</p>
        </div>
        <div className="message-text">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default SystemMessage;
