import ContentLeft from "./ContentLeft/ContentLeft";
import ContentRight from "./ContentRight/ContentRight";
import "./Content.css";

function Content() {
  return (
    <div className="content">
      <div className="col-8">
        <ContentLeft />
      </div>
      <div className="col-4">
        <ContentRight />
      </div>
    </div>
  );
}

export default Content;
