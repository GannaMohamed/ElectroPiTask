import Image from "next/image";
import generalStyles from "../../page.module.css";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.heroBG}>
      <div className={styles.header}>
        <div>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="sout logo"
            width={60}
            height={10}
            priority
          />
          <ul>
            <li>
              <a className={styles.navlink}>Features</a>
            </li>
            <li>
              <a className={styles.navlink}>Pricing</a>
            </li>
            <li>
              <a className={styles.navlink}>Docs</a>
            </li>
            <li>
              <a className={styles.navlink}>Blog</a>
            </li>
          </ul>
        </div>
        <div className={generalStyles.ctas}>
          <a className={generalStyles.secondary}>Login</a>
          <a className={generalStyles.primary}>Sign Up</a>
        </div>
      </div>

      {/* HERO */}
      <section className={styles.hero}>
        <a className={generalStyles.teritary}>
          <Image
            className={styles.heroLogo}
            aria-hidden
            src="/logo.svg"
            alt="Scout Logo"
            width={16}
            height={16}
          />
          <p className={`${generalStyles.teritary} ${generalStyles.greyText}`}>
            is currently in beta
          </p>
          <Image
            aria-hidden
            src="/hero/arrow.svg"
            alt="Arrow"
            width={20}
            height={20}
          />
        </a>
        <div>
          <h1>AI for teams building</h1>
          <h1>what's next</h1>
        </div>
        <h4 className={generalStyles.greyText}>
          Scout gives you the tools to build custom agents and <br /> in record
          time.
        </h4>
        <div className={generalStyles.ctas}>
          <a>
            Get Started
            <Image
              aria-hidden
              className={generalStyles.invertedColor}
              src="/hero/arrow.svg"
              alt="Arrow"
              width={20}
              height={20}
            />
          </a>
        </div>
      </section>

      {/* CODE */}
      <section>
        <img
          className={`${styles.codeImage} border`}
          src="/hero/hero-image.svg"
          alt="Hero code preview"
        />
      </section>
    </div>
  );
}
