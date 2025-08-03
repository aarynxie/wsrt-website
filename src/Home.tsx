import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.herocontainer}>
        <div className={styles.herotextcontainer}>
          <h1>Where students engineer the future of space</h1>
          <p>
            WSRT is a student-led design team at the University of Waterloo
            dedicated to advancing aerospace research through hands-on design
            and engineering competitions.
          </p>
          <a className={styles.projectsbutton} href="/projects">
            See our Projects
          </a>
        </div>
        <div className={styles.overlaysun}></div>
      </div>
      <div className={styles.projectscontainer}>projects</div>
    </>
  );
}
