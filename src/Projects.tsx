import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <>
      <div className={styles.projectscontainer}>
        <h1>Projects</h1>
        <p>
          Take a closer look at the projects we've been working on since 2024.
        </p>
        <div className={styles.allprojectscontainer}>
          <div
            className={styles.astracontainer}
            id={styles.singleprojectcontainer}
          >
            <div className={styles.containerleft}>
              <h1>ASTRA</h1>
              <p>Adaptive Signal Transmission and Real-time Analytics</p>
            </div>
            <div className={styles.containerright}>
              <p>Jan 2025 - Current</p>
              <p>CAN-SBX 7</p>
            </div>
          </div>
          <div className={styles.wsstcontainer} id="singleprojectcontainer">
            <div className={styles.containerleft}>
              <h1>WSST</h1>
              <p>Waterloo Space Soldering Team</p>
            </div>
            <div className={styles.containerright}>
              <p>Jan 2024 - Aug 2024</p>
              <p>CAN-RGX 7</p>
            </div>
          </div>
        </div>
        <h3>And more to come!</h3>
      </div>
    </>
  );
}
