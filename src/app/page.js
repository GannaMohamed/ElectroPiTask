import Image from "next/image";
import styles from "./page.module.css";

import Header from "./sections/1. header/Header";
import Partners from "./sections/2. partners/Partners";
import Features from "./sections/3. features/features";
import Tests from "./sections/4. tests/Tests";
import Plans from "./sections/5. plans/Plans";
import Footer from "./sections/6. footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Partners />
      <Features />
      <Tests />
      <Plans />
      <Footer />
    </div>
  );
}
