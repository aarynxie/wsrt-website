import styles from "./Home.module.css";
import astraText from "./assets/uw astra title.svg";

import Footer from "./footer.tsx";

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
          <a className={styles.projectsbutton} href="#projects">
            See our Projects
          </a>
        </div>
        <div className={styles.overlaysun}></div>
      </div>
      <div className={styles.projectscontainer} id="projects">
        <div className={styles.projectsheader}>
          <h1>Our Projects</h1>
        </div>
        <div className={styles.projectscontent}>
          <div className={styles.projectscontenttopbox}>
            <img src={astraText}></img>
            <p>Adaptive Signal Transmission and Real-time Analytics</p>
          </div>
          <div className={styles.projectscontentbottombox}>
            <div className={styles.projectscontentbottomleft}>
              <h2>WSST</h2>
              <p>Waterloo Space Soldering Team</p>
            </div>
            <div className={styles.projectscontentbottomright}>
              <h2>See all projects</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
