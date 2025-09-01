import styles from "./footer.module.css";
import Image from "next/image";
import generalStyles from "../../page.module.css";

export default function Footer() {
  return (
    // <footer className={styles.footer}>
    //   <div className={styles.topRow}>
    //     <div className={styles.brand}>
    //       <Image src="logo.svg" width={100} height={30} />
    //       <div style={{ position: "relative" }}>
    //         <img src="/footer/on.svg" />
    //         <p style={{ position: "absolute", top: "5rem", left: "7rem" }}>
    //           ALL SYSTEMS OPERATIONAL
    //         </p>
    //       </div>
    //     </div>

    <footer className={styles.footer}>
      <div className={styles.topRow}>
        {/* Logo + Status */}
        <div className={styles.brand}>
          <Image src="logo.svg" width={100} height={30} />
          <div className={styles.status}>
            <span className={styles.statusDot}></span>
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>

        <div className={styles.linksWrapper}>
          <div>
            <h5>LINKS</h5>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Docs</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h5>SOLUTIONS</h5>
            <ul>
              <li>Slack Bot</li>
              <li>Discord Bot</li>
              <li>Command</li>
              <li>Onsite Chat</li>
            </ul>
          </div>
          <div>
            <h5>LEGAL</h5>
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p>Copyright © 2024 Scout. All rights reserved.</p>
        <div className={styles.socials}>
          <a>
            <Image
              src="/footer/media1.svg"
              alt="Slack"
              width={20}
              height={20}
            />
          </a>
          <a>
            <Image src="/footer/media2.svg" alt="X" width={20} height={20} />
          </a>
          <a>
            <Image
              src="/footer/media3.svg"
              alt="LinkedIn"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
