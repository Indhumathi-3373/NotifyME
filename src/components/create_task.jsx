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
            <p
              style={{
                color: " rgb(78, 78, 245)",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                fontWidth: "normal",
              }}
            >
              Reminder Title
            </p>
            <p    style={{
                color: " rgb(78, 78, 245)",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                fontWidth: "normal",
              }}
              >Priority</p>
            <div className="inputs-createtask">
              <input className="createtask-input" type="text" placeholder="e.g. Morning Workout" />

              <input className="createtask-input" type="text" placeholder="Reminder Category" />
            </div>

            <div>
              <p
                style={{
                  color: " rgb(78, 78, 245)",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  fontWidth: "normal",
                }}
              >
                Date
              </p>
              <p
                style={{
                  color: " rgb(78, 78, 245)",
                  textTransform: "uppercase",
                  fontFamily: "sans-serif",
                  fontWidth: "normal",
                }}
              >
                Time
              </p>
            <div className="inputs-createtask">
                <input className="createtask-input"type="date" />
                <input className="createtask-input" type="time" />
            </div>
        
            </div>
            <p
              style={{
                color: " rgb(78, 78, 245)",
                textTransform: "uppercase",
                fontFamily: "sans-serif",
                fontWidth: "normal",
              }}
            >
              Description
            </p>

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
