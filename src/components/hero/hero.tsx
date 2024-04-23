import { component$, useStore, $ } from "@builder.io/qwik";
import Flickbutton from "../flickbutton/flickbutton";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Link } from "@builder.io/qwik-city";
import { LuArrowDownToLine, LuCheckCircle } from "@qwikest/icons/lucide";

export default component$(() => {
  const perks = useStore([
    {
      name: "Instant Delivery",
      icon: $(LuArrowDownToLine),
      description: "Get your assets delivered to your mail",
    },
    {
      name: "Guarenteed Quality",
      icon: $(LuCheckCircle),
      description:
        "Every asset in our platform is verified by our team to ensure the highest quality standards.",
    },
    {
      name: "Instant Delivery",
      icon: $(LuArrowDownToLine),
      description: "Get your assets delivered to your mail",
    },
  ]);

  return (
    <>
      <MaxWidthWrapper>
        <div class=" mx-auto flex flex-col items-center py-20 text-center">
          <div class="flex p-9 text-white ">
            <div class="flex items-center justify-center font-dancing text-11xl font-bold -tracking-[.03em]">
              Things
            </div>
            <div class="flex flex-col items-center justify-center pl-3 ">
              <p class="font-amatic text-7xl font-semibold">you dream</p>
              <p class="font-amatic text-7xl font-semibold">we make</p>
            </div>
          </div>
          <div class="max-w-prose font-amatic text-2xl font-semibold tracking-wider text-white ">
            Discover unique, personalized products of exclusive quality and
            elevate your shopping experience with us! From curated selections to
            over 1000 digital offerings, find the perfect blend of customization
            and convenience.
          </div>
          <div class="my-3 max-w-prose font-amatic text-4xl font-bold text-white">
            Redefine your shopping journey today!
          </div>
          <div class="flex w-full justify-center space-x-3 p-5 ">
            <Link href="/products">
              <Flickbutton start="Bro" middle="ws" end="E" />
            </Link>
          </div>
          {/* TODO:List products */}
        </div>
      </MaxWidthWrapper>
      <section class="mt-5 border-t border-gray-200">
        <MaxWidthWrapper class="bg-gray/10 py-20 backdrop-blur-md">
          <div class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} class="text-center">
                <div class="flex justify-center">
                  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon class="h-1/3 w-1/3" />}
                  </div>
                </div>
                <div class="mt-6 text-white md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 class="font-dancing text-4xl ">{perk.name}</h3>
                  <p class="mt-3 font-amatic text-2xl font-bold">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
});
