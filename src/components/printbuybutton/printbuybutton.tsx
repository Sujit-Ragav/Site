import { $, component$ } from "@builder.io/qwik";
import styles from "./printbuybutton.module.css";
import leatherButtonImage from "./leatherbutton.jpg"; // Import the image file

interface BuyButtonProps {
  name: string;
}

export default component$((props: BuyButtonProps) => {
  const handleClick = $(() => {
    // Handle click event here
    console.log("Button clicked");
  });

  return (
    <button
      class={styles.buttonleather}
      type="button"
      style={{
        backgroundImage: `linear-gradient(to bottom, #fff 55%, #ddd 55%), url(${leatherButtonImage})`,
      }}
      onClick$={handleClick}
    >
      {props.name}
    </button>
  );
});
