import { component$ } from "@builder.io/qwik";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Link } from "@builder.io/qwik-city";
import NavItems from "../NavItems/NavItems";
import Cart from "../Cart/cart";

export default component$(() => {
  const user = null;
  return (
    <>
      <div class="sticky inset-x-0 top-0 z-50 h-14 bg-black">
        <div class="relative bg-black">
          <MaxWidthWrapper>
            <div class="border-b border-gray-400">
              <div class="flex h-14 items-center">
                {/* TODO:mobile nav */}
                <div class="flex pl-10 text-white lg:ml-0">
                  <Link href="/">LOGO</Link>
                </div>
                <div class="z-50 hidden lg:ml-20 lg:block lg:self-center">
                  <NavItems />
                </div>
                <div class="ml-auto flex items-center">
                  <div class=" hidden px-5 py-2.5 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {user ? null : (
                      <Link
                        class="rounded-lg bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        href="/sign-in"
                      >
                        Sign In
                      </Link>
                    )}
                    {user ? null : <span class="h-6 w-px bg-white"></span>}
                    {user ? null : (
                      <Link
                        class="rounded-lg bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        href="/sign-up"
                      >
                        Create Account
                      </Link>
                    )}
                    {user ? null : (
                      <div class="flex lg:ml-6">
                        <span class="h-6 w-px bg-white"></span>
                      </div>
                    )}
                    <div class="ml-4 lg:ml-6">
                      <Cart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </>
  );
});
