import "./Message.css";

function Message({ url, username, posttime, message, effect, more }) {
  return (
    <div className="message">
      <img src={url} alt="avatar"></img>
      <div class="message-content">
        <div className="message-header">
          <h4>{username}</h4>
          <p>{posttime}</p>
        </div>
        <div className="message-text">
          <p>
            {message}
            <span>
              <b>{effect}</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
