import "./ContentRight.css";
import Message from "./Message/Message";
import SystemMessage from "./SystemMessage/SystemMessage";

function ContentRight() {
  return (
    <div className="content-right">
      <Message
        url="avatar-two.png"
        username="Alena Curtis"
        posttime="- Just Now"
        message="Planning for new event at Sydney room for new project on "
        effect="14:00 PM"
      />

      <SystemMessage
        value="Your message to Leo Dias has been sent."
        posttime="- Just Now"
        message="Planning for new event at Sydney room for new project on coming week."

      />

      <Message
        url="avatar-three.png"
        username="Alena Curtis"
        posttime="1 hour ago"
        message="Attached new design file to "
        effect="Userflow"
      />

      <Message
        url="avatar-four.png"
        username="Alena Curtis"
        posttime="2 hour ago"
        message="Comment on your task "
        effect="UI Design"
      />
    </div>
  );
}

export default ContentRight;
