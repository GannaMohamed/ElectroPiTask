import Image from "next/image";
import generalStyles from "../../page.module.css";
import styles from "./plans.module.css";
import "./plans.css";
export default function Plans() {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2 style={{ fontWeight: 400 }}>A plan for every need.</h2>
        <h4 className={generalStyles.greyText}>
          Whether you are just starting or require massive scale, we have a
          solution.
        </h4>
      </div>
      <div className={styles.plans}>
        {/* PLAN */}
        <div className="plan hobby">
          <div>
            <img src="/plans/hobby.svg" />
          </div>
          <h2>$0</h2>
          <p className={generalStyles.greyText}>
            Great for personal use or a first step to explore the Scout
            platform.
          </p>
          <a className={generalStyles.betabtn}>Sign Up</a>
        </div>
        {/* PLAN */}
        <div className="plan pro">
          <div>
            <img src="/plans/pro.svg" />
          </div>
          <h2>$50</h2>
          <p className={generalStyles.greyText}>
            Perfect for building and scaling models with limited context.
          </p>
          <div className={generalStyles.ctas}>
            <a className={generalStyles.primary}>Sign Up</a>
          </div>
        </div>
        {/* PLAN */}
        <div className="plan enterprise">
          <div>
            <img src="/plans/enterprise.svg" />
          </div>
          <h2>Custom</h2>
          <p className={generalStyles.greyText}>
            For large scale models with large and ever- changing context.
          </p>
          <a className={generalStyles.betabtn}>Sign Up</a>
        </div>
      </div>
    </section>
  );
}
