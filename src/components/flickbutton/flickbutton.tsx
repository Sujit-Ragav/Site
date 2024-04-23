import { component$ } from "@builder.io/qwik";
import styles from "./flickbutton.module.css";

interface FlickProps {
  start: string;
  middle: string;
  end: string;
}

export default component$((props: FlickProps) => {
  return (
    <button class={`${styles.glowingbtn} font-amatic `}>
      <span class={`${styles.glowingtxt} font-amatic font-extrabold`}>
        {props.start}
        <span class={`${styles.faultyletter} font-amatic`}>{props.middle}</span>
        {props.end}
      </span>
    </button>
  );
});
