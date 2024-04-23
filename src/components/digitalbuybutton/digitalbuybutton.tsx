import { component$ } from "@builder.io/qwik";
import styles from "./digitalbuybutton.module.css";

interface buybutton {
  name: string;
}

export default component$((props: buybutton) => {
  return (
    <button class={styles.button49} role="button">
      {props.name}
    </button>
  );
});
