import Image from "next/image";
import generalStyles from "../../page.module.css";
import styles from "./features.module.css";
import "./features.css";
export default function Features() {
  return (
    <section className="bento-container">
      <img className="bento-img" src="/features/bento.svg" />
      {/* <Box />
      <Box />
      <Box />
      <Box />
      <Box /> */}
    </section>
  );
}

// function box(title, description, bentotype) {
//   return (
//     <section classname={`bento-section bento-section-${bentotype}`}>
//       <div classname="bento-body">
//         <h6 classname="bento-title">Customize your AI</h6>
//         <p classname="bento-description greyText">
//           Bureau doesn’t care about the framework you use. Add your Git
//           repository or start a new one and Bureau will look after your content.
//           This is the publishing experience for static websites.
//         </p>
//       </div>
//     </section>
//   );
// }
