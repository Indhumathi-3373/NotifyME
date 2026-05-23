import "../styles/createtask.css";
import Navbar from "./navbar";

export default function create_task() {
  return (
    <div>
      <Navbar />

      <div className="body-ct">
        <div className="header">
          <h1 style={{ fontSize: "2rem", color: "#111721", fontWeight: "600" }}>
            Create New Reminder
          </h1>
          <p
            style={{
              color: "#51555f",
              fontSize: "1rem",
              letterSpacing: "0.02em",
            }}
          >
            Stay organized by managing tasks, deadlines, and important schedules
            in one place.
          </p>
        </div>

        <div className="create_box">
          <div className="box-styling">
            <div className="inputs-createtask">
              <div className="field-group">
                <p className="field-label">Title</p>
                <input
                  className="createtask-input"
                  type="text"
                  placeholder="e.g. Morning Workout"
                />
              </div>
              <div className="field-group">
                <p className="field-label">Reminder</p>
                <input
                  className="createtask-input"
                  type="text"
                  placeholder="Reminder Category"
                />
              </div>
            </div>

            <div className="inputs-createtask">
              <div className="field-group">
                <p className="field-label">Day</p>
                <input className="createtask-input" type="date" />
              </div>
              <div className="field-group">
                <p className="field-label">Time</p>
                <input className="createtask-input" type="time" />
              </div>
            </div>

            <p className="field-label">Description</p>

            <input className="textarea-ct" placeholder="Add reminder details..." />
            <div className="buttons-createtask">
              <button className="create-taskbtn">Cancel</button>
              <button className="create-taskbtn">Create Reminder</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
