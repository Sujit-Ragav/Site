import { component$ } from "@builder.io/qwik";
import { LuShoppingCart } from "@qwikest/icons/lucide";

export default component$(() => {
  const itemCount = 0;
  return (
    <>
      <div class="text-center">
        <button
          class="group flex rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="cart"
          data-drawer-show="cart"
          data-drawer-placement="right"
          aria-controls="cart"
        >
          <LuShoppingCart class="h-5 w-5 flex-shrink-0 " />
          <span class="ml-2 text-sm font-medium text-white ">0</span>
        </button>
      </div>

      {/* <!-- drawer component --> */}
      <div
        id="cart"
        class="fixed right-0 top-0 z-40 h-screen w-80 translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          Cart (0)
        </h5>
        <button
          type="button"
          data-drawer-hide="cart"
          aria-controls="cart"
          class="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
        {itemCount > 0 ? (
          <>
            <div class="flex w-full flex-col pr-6">{/* TODO:CART logic */}</div>
            <div class="space-y-4 pr-6">
              <hr class="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
              <div class="space-y-1.5 pr-6">
                <div class=" flex"></div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
});
