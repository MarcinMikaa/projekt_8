import "./Task.css";

function Task({ message, status, priority }) {
  return (
    <div className="task">
      <div className="point"></div>
      <div className="message">{message}</div>
      <div className="status">{status}</div>
      <div className="priority">{priority}</div>
      <div className="people">
        <div className="person-one">
          <img src="person-one.png" alt="person-one"></img>
        </div>
        <div className="person-two">
          <img src="person-two.png" alt="person-two"></img>
        </div>
        <div className="person-three">
          <img src="person-three.png" alt="person-three"></img>
        </div>
        <div className="person-more">+8</div>
      </div>
      <div className="more">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Task;
