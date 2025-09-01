import Image from "next/image";
import generalStyles from "../../page.module.css";
import styles from "./Partners.module.css";
import "./partners.css";
export default function Partners() {
  return (
    <section className={styles.container}>
      <section>
        <Image
          src="/partners-logos/Clip path group-1.svg"
          width={100}
          height={100}
        />
        <Image
          src="/partners-logos/Clip path group-2.svg"
          width={100}
          height={100}
        />
        <Image
          src="/partners-logos/Clip path group-3.svg"
          width={100}
          height={100}
        />
        <Image
          src="/partners-logos/Clip path group.svg"
          width={100}
          height={100}
        />
      </section>
      <div style={{ display: "block" }}>
        <h2>Used by teams at Statsig, Deno, </h2>
        <h2>Dagster, Evidence and more.</h2>
      </div>
      <section>
        <Image
          src="/partners-logos/Image [hidden]-1.svg"
          width={100}
          height={100}
        />
        <Image
          src="/partners-logos/Image [hidden]-2.svg"
          width={100}
          height={100}
        />
        <Image
          src="/partners-logos/Image [hidden].svg"
          width={100}
          height={100}
        />
        <Image src="/partners-logos/Mask group.svg" width={100} height={100} />
      </section>
    </section>
  );
}
