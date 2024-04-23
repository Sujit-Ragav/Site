import { $, component$, useSignal } from "@builder.io/qwik";
import { PRODUCT_CATEGORIES } from "~/config";
import NavItem from "../NavItem/NavItem";

export default component$(() => {
  return (
    <div class="flex h-full gap-6">
      {PRODUCT_CATEGORIES.map((category, i) => {
        return <NavItem category={category} key={category.value} />;
      })}
    </div>
  );
});
