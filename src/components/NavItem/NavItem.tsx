import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PRODUCT_CATEGORIES } from "~/config";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
}

export default component$<NavItemProps>(({ category }) => {
  return (
    <div class="flex">
      <button
        id="dropdownHoverButton"
        data-dropdown-toggle={category.value}
        data-dropdown-offset-skidding="100"
        data-dropdown-trigger="hover"
        class="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {category.label}
        <svg
          class="ms-3 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id={category.value}
        class="z-10 hidden w-auto divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
      >
        <div class="col-span-4 col-start-1 grid grid-cols-3 gap-x-8 p-5">
          {category.featured.map((item) => (
            <div key={item.name} class="group relative text-base sm:text-sm">
              <div class="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={item.imageSrc}
                  alt="product category image"
                  class="object-cover object-center"
                />
              </div>

              <Link
                href={item.href}
                class="mt-6 block font-medium text-gray-900"
              >
                {item.name}
              </Link>
              <p class="mt-1" aria-hidden="true">
                Shop now
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
