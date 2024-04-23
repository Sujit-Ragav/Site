import { component$ } from "@builder.io/qwik";
import styles from "./digitalcartbutton.module.css";

interface buybutton {
  name: string;
}

export default component$((props: buybutton) => {
  return (
    <button class={styles.button1} role="button">
      <span class={styles.button1shadow}></span>
      <span class={styles.button1edge}></span>
      <span class={styles.button1front}>buy</span>
    </button>
  );
});
