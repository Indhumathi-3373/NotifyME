import Navbar from "./navbar";

export default function create_task() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "#f5f7fb"
      }}
    >
      <Navbar />

      <div style={{ flex: 1 }}>
        {/* Header */}
        <div
          className="head"
          style={{
            paddingTop: "32px",
            paddingLeft: "12%",
            paddingRight: "12%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
            fontWeight: "normal",
            flexShrink: 0
          }}
        >
          <h1 style={{ fontSize: "2rem", color: "#1c2a41" }}>
            Create New Reminder
          </h1>

          <p
            style={{
              color: "#667085",
              fontSize: "1rem",
              maxWidth: "760px",
              letterSpacing: "0.02em"
            }}
          >
            Stay organized by managing tasks, deadlines, and important
            schedules in one place.
          </p>
        </div>

        {/* Main Content */}
        <div
          style={{
            marginTop: "16px",
            marginLeft: "12%",
            marginRight: "12%",
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
            flexWrap: "wrap",
            paddingBottom: "40px"
          }}
        >
          {/* Left Box */}
          <div
            className="create_box"
            style={{
              display: "flex",
              flexDirection: "column",
              background: "white",
              flex: 1,
              minWidth: "320px",
              padding: "32px",
              border: "1px solid #d5def3",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(22, 34, 62, 0.06)"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <p
                style={{
                  marginTop: "8px",
                  marginBottom: "4px",
                  color: "#0d62c9",
                  fontWeight: "700",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase"
                }}
              >
                Reminder Title
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  width: "100%",
                  flexWrap: "wrap"
                }}
              >
                <input
                  type="text"
                  placeholder="e.g. Morning Workout"
                  style={{
                    flex: 1,
                    minWidth: "220px",
                    border: "1px solid #aeb9d0",
                    borderRadius: "12px",
                    background: "#e0e6f2",
                    padding: "14px 16px",
                    fontSize: "1rem",
                    color: "#243148"
                  }}
                />

                <input
                  type="text"
                  placeholder="Reminder Category"
                  style={{
                    flex: 1,
                    minWidth: "220px",
                    border: "1px solid #aeb9d0",
                    borderRadius: "12px",
                    background: "#e0e6f2",
                    padding: "14px 16px",
                    fontSize: "1rem",
                    color: "#243148"
                  }}
                />
              </div>

              {/* Date and Time */}
              <div
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px"
                }}
              >
                <p>Date</p>
                <p>Time</p>

                <input
                  type="date"
                  style={{
                    border: "1px solid #aeb9d0",
                    borderRadius: "12px",
                    background: "#e0e6f2",
                    padding: "14px 16px",
                    fontSize: "1rem",
                    color: "#243148"
                  }}
                />

                <input
                  type="time"
                  style={{
                    border: "1px solid #aeb9d0",
                    borderRadius: "12px",
                    background: "#e0e6f2",
                    padding: "14px 16px",
                    fontSize: "1rem",
                    color: "#243148"
                  }}
                />
              </div>

              {/* Description */}
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "4px",
                  color: "#0d62c9",
                  fontWeight: "700",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase"
                }}
              >
                Description
              </p>

              <textarea
                placeholder="Add reminder details..."
                style={{
                  minHeight: "140px",
                  border: "1px solid #aeb9d0",
                  borderRadius: "12px",
                  background: "#e0e6f2",
                  padding: "14px 16px",
                  fontSize: "1rem",
                  color: "#243148",
                  resize: "none"
                }}
              ></textarea>
            </div>
          </div>

          {/* Right Box */}
          <div
            style={{
              flex: 1,
              minWidth: "280px",
              background: "white",
              padding: "28px",
              border: "1px solid #d5def3",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(22, 34, 62, 0.06)"
            }}
          >
            <h2
              style={{
                color: "#1c2a41",
                fontSize: "1.9rem",
                marginBottom: "20px"
              }}
            >
              Reminder Scheduling
            </h2>

            <p
              style={{
                color: "#0d62c9",
                fontWeight: "700",
                letterSpacing: "0.04em",
                marginBottom: "14px"
              }}
            >
              ADD TIME SLOTS
            </p>

            <div
              style={{
                background: "#e7edf7",
                borderLeft: "4px solid #0d62c9",
                borderRadius: "12px",
                padding: "14px",
                marginBottom: "12px"
              }}
            >
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#243148",
                  marginBottom: "4px"
                }}
              >
                Morning Routine
              </p>

              <p style={{ color: "#667085" }}>
                09:00 AM - 10:30 AM
              </p>
            </div>

            <div
              style={{
                background: "#ede9f7",
                borderLeft: "4px solid #6d42d8",
                borderRadius: "12px",
                padding: "14px",
                marginBottom: "12px"
              }}
            >
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#243148",
                  marginBottom: "4px"
                }}
              >
                Study Time
              </p>

              <p style={{ color: "#667085" }}>
                11:00 AM - 12:30 PM
              </p>
            </div>

            <button
              style={{
                width: "100%",
                background: "transparent",
                border: "2px dashed #bcc7db",
                borderRadius: "12px",
                padding: "16px",
                color: "#4a5568",
                fontSize: "1.15rem",
                marginBottom: "24px",
                cursor: "pointer"
              }}
            >
              + Add Slot
            </button>

            <button
              style={{
                width: "100%",
                border: "none",
                borderRadius: "12px",
                padding: "14px",
                color: "#fff",
                fontSize: "1.2rem",
                background:
                  "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                cursor: "pointer"
              }}
            >
              Create Reminder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}