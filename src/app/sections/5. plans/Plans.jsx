import generalStyles from "../../page.module.css";
import styles from "./plans.module.css";
import "./plans.css";

function Chip({ img, className, children }) {
  return (
    <a className={`${generalStyles.chip} ${className || ""}`}>
      {img && <img src={img} alt={`${children} Chip`} />}
      {children}
    </a>
  );
}

function Plan({
  icon,
  chipClass,
  chipLabel,
  price,
  description,
  cta,
  features,
  main,
}) {
  return (
    <div className={`plan ${chipLabel.toLowerCase()}`}>
      <Chip img={icon} className={chipClass}>
        {chipLabel}
      </Chip>

      <h2>{price}</h2>
      <p className={generalStyles.greyText}>{description}</p>
      {main ? (
        <a className={generalStyles.ctas}>{cta}</a>
      ) : (
        <a className={generalStyles.betabtn}>{cta}</a>
      )}
      <ul className={styles.checklist}>
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Plans() {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h2 style={{ fontWeight: 400, textAlign: "center" }}>
          A plan for every need.
        </h2>
        <h4 className={generalStyles.greyText} style={{ textAlign: "center" }}>
          Whether you are just starting or require massive scale, we have a
          solution.
        </h4>
      </div>

      <div className={styles.plans}>
        <Plan
          icon="/plans/hobby-icon.svg"
          chipClass="hobbyChip"
          chipLabel="Hobby"
          price="$0"
          description="Great for personal use or a first step to explore the Scout platform."
          cta="Sign Up"
          features={[
            "100 Interactions (GPT-3.5 Only)",
            "Deploy 1 App",
            "Connect 1 Collection",
            "10GB of Storage",
            "Community Support (Discord)",
          ]}
        />
        <Plan
          main="true"
          icon="/plans/pro-icon.svg"
          chipClass="proChip"
          chipLabel="Pro"
          price="$50"
          description="Perfect for building and scaling models with limited context."
          cta="Sign Up"
          features={[
            "Unlimited Interactions",
            "$0.09 per Interaction",
            "Deploy 10 Apps",
            "Connect 10 Collections",
            "1TB of Storage",
            "Community & Email Support",
          ]}
        />
        <Plan
          icon="/plans/enterprise-icon.svg"
          chipClass="enterpriseChip"
          chipLabel="Enterprise"
          price="Custom"
          description="For large scale models with large and ever-changing context."
          cta="Request Access"
          features={[
            "Unlimited Interactions",
            "Custom Interaction",
            "Pricing",
            "Unlimited Apps",
            "Unlimited Collections",
            "Unlimited Storage",
            "Dedicated Support",
          ]}
        />
      </div>

      <div className="dedicatedSupportWrapper">
        <div className="dedicatedSupportCard col">
          <div className="col">
            <div className="col" style={{ gap: "0.8rem" }}>
              <h5>Dedicated Support</h5>
              <p className={generalStyles.greyText}>
                We are here to help get you started with a dedicated support
                engineer who can assist with scoping your first models and
                getting them deployed.
              </p>
            </div>
            <p className={styles.included}>what's included</p>
            <ul
              className={[styles.checklist, styles.supportChecklist].join(" ")}
            >
              <li>Shared Slack Channel</li>
              <li>Prompt Engineering Guidance</li>
              <li>Dedicated Support Engineer</li>
              <li>Context Sourcing Guidance</li>
            </ul>
          </div>
        </div>

        <div className="dedicatedSupportCard addOnSection">
          <div className="col centered" style={{ height: "100%" }}>
            <Chip img="/plans/addon.svg" className="addOn">
              Add On
            </Chip>
            <h2>$750</h2>
            <p>monthly</p>
            <a className={generalStyles.ctas}>Request Access</a>
          </div>
        </div>
      </div>
    </section>
  );
}
