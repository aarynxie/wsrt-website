import styles from "./Home.module.css";
import astraText from "./assets/uw astra title.svg";

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
      <div className={styles.projectscontainer}>
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
      <div className={styles.footer}>
        <div className={styles.footertop}>
          <div className={styles.footertext}>
            <h2>Let's connect</h2>
            <p>
              Whether you're a student, sponsor, or just curious, don’t hesitate
              to reach out!
            </p>
          </div>
          <div className={styles.footerlinks}>
            <a href="mailto:uwspaceresearchteam@gmail.com">Email</a>
            <a
              href="https://www.instagram.com/uwspaceresearch/"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/uw-space-research/"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.footerbottom}>
          <p>Made with 💜 in Waterloo, ON</p>
          <small>© Waterloo Space Research Team 2025</small>
        </div>
      </div>
    </>
  );
}
