import "./ContentLeft.css";
import Title from "./Title/Title";
import Tasks from "./Tasks/Tasks";

function ContentLeft() {
  return (
    <div className="content-left">
      <Title />
      <Tasks />
    </div>
  );
}

export default ContentLeft;
