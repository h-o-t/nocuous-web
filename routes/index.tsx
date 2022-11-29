import Banner from "@components/Banner.tsx";
import Title from "@components/Title.tsx";

export default function Home() {
  return (
    <>
      <Title title="nocuous" />
      <section class="bg-white dark:bg-black">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7 xl:col-span-8">
            <h1 class="font-header max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              nocuous
            </h1>
            <p class="max-w-2xl mb-6 font-light text-yellow-500 lg:mb-8 md:text-lg lg:text-xl dark:text-yellow-400">
              Static analysis of JavaScript and TypeScript to identify toxic
              code.
            </p>
            <form action="/stat" method="GET" class="">
              <div class="flex items-center mb-3">
                <div class="relative w-auto mr-3">
                  <label
                    for="member_email"
                    class="hidden mb-2 text-sm font-medium text-yellow-900 dark:text-yellow-300"
                  >
                    URL
                  </label>
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      class="w-5 h-5"
                    >
                      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                    </svg>
                  </div>
                  <input
                    class="block md:w-96 w-full p-3 pl-10 text-sm text-yellow-900 border border-yellow-300 rounded-lg bg-yellow-50 focus:ring-red-500 focus:border-red-500 dark:bg-yellow-700 dark:border-yellow-600 dark:placeholder-yellow-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Enter root URL"
                    type="text"
                    name="q"
                    id="q"
                    required
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Analyze..."
                    class="px-5 py-3 text-sm font-header font-medium text-center text-white rounded-lg cursor-pointer bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                    name="member_submit"
                    id="member_submit"
                  />
                </div>
              </div>
              <div class="text-sm text-left text-yellow-500 dark:text-yellow-300">
                The project is based on Erik Dörnenburg's article{" "}
                <a
                  href="https://erik.doernenburg.com/2008/11/how-toxic-is-your-code/"
                  target="_blank"
                  class="text-red-600 hover:underline dark:text-red-500"
                >
                  How toxic is your code?
                </a>{" "}
                This website integrates the standalone library available at{" "}
                <a
                  class="font-mono text-red-600 hover:underline dark:text-red-500"
                  href="https://deno.land/x/nocuous"
                  target="_blank"
                >
                  deno.land/x/nocuous
                </a>.
              </div>
            </form>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 xl:col-span-4 lg:flex">
            <img
              src="/logo.svg"
              alt="phone illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
}
