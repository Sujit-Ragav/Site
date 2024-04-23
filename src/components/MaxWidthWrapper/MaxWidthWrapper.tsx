import { Slot, component$ } from "@builder.io/qwik";

export default component$((props: any) => {
  return (
    <div class={`${props.class} max-w-screen mx-auto w-full`}>
      <Slot />
    </div>
  );
});
