import { component$ } from "@builder.io/qwik";
import styles from "./printcartbutton.module.css";

interface buybutton {
  name: string;
}

export default component$((props: buybutton) => {
  return (
    <button class={styles.button40} role="button">
      <span class="text">{props.name}</span>
    </button>
  );
});
