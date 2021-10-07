import "./Tasks.css";
import Task from "./Task/Task";
import Pending from "./Task/Status/Pending";
import InProgress from "./Task/Status/InProgress";
import Completed from "./Task/Status/Completed";
import Cancelled from "./Task/Status/Cancelled";
import Inactive from "./Task/Status/Inactive";
import Minor from "./Task/Priority/Minor";
import Normal from "./Task/Priority/Normal";
import Critical from "./Task/Priority/Critical";

function Tasks() {
  return (
    <div className="tasks">
      <h3>On hold</h3>
      <Task message="Evaluate the addition and deletion of user IDs." status={<Pending />} priority={<Minor />} />
      <hr></hr>
      <Task message="Identify the implementation team." status={<Pending />} priority={<Normal />} />
      <hr></hr>
      <Task message="Batch schedule download/process." status={<InProgress />} priority={<Critical />} />
      <hr></hr>
      <Task message="Monitor system performance and adjust hardware." status={<Pending />} priority={<Minor />} />
      <div className="completed-title">
        <h3>Completed</h3>
        <Inactive />
      </div>
      <div className="completed">
        <Task message="Install console machines and prerequisite software." status={<Completed />} priority={<Critical />}/>
        <hr></hr>
        <Task message="Design a relatively simple business system." status={<Pending />} priority={<Critical />} />
        <hr></hr>
        <Task message="Define users and workflow." status={<Cancelled />} priority={<Minor />} />
      </div>
    </div>
  );
}

export default Tasks;
