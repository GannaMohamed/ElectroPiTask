import Image from "next/image";
import generalStyles from "../../page.module.css";
import styles from "./tests.module.css";
export default function Tests() {
  return (
    <section className={styles.container}>
      <Image
        className={styles.star}
        src="/tests-logos/star.svg"
        width={40}
        height={40}
      />
      <section>
        <Image
          src="/tests-logos/Clip path group-1.svg"
          width={100}
          height={100}
        />
        <Image
          src="/tests-logos/Clip path group-2.svg"
          width={100}
          height={100}
        />
        <Image src="/tests-logos/Group.svg" width={100} height={100} />
      </section>
      <section
      // style={{ flexGrow: 1 }}
      >
        <h3>
          "Scout is an indispensable tool for our Engineering, DS and Sales
          teams to engage with our customers. We rely on Scout daily, making it
          an integral part of our operations."
        </h3>
        <div>
          <Image src="/tests-logos/person.svg" width={40} height={40} />
          <h6>Vijaye Raji</h6>
          <h6 className={generalStyles.greyText}>CEO of Statsig</h6>
        </div>
      </section>
      <section>
        <Image src="/tests-logos/Image-1.svg" width={100} height={100} />
        <Image src="/tests-logos/Image.svg" width={100} height={100} />
        <Image
          src="/tests-logos/Clip path group.svg"
          width={100}
          height={100}
        />
      </section>
    </section>
  );
}
