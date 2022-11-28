import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>nocuous web</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-lg">
        <div class="flex items-center">
          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the nocuous logo: a radiation trefoil symbol"
          />
          <div class="flex-grow p-4">
            <h1 class="text-3xl font-header">nocuous</h1>
            <h2 class="text-sm">Code toxicity for JavaScript and TypeScript</h2>
          </div>
        </div>
        <p class="my-6">
          <span class="font-header">nocuous</span>{" "}
          is a tool to provide static analysis of JavaScript and TypeScript code
          and provide code toxicity information. The project was inspired by
          Erik Dörnenburg's article{" "}
          <a
            href="https://erik.doernenburg.com/2008/11/how-toxic-is-your-code/"
            target="_blank"
            class="text-blue dark:text-blue-100 hover:underline"
          >
            How toxic is your code?
          </a>{" "}
          If you want to use the project directly, it is available on{" "}
          <a
            href="https://deno.land/x/nocuous/"
            target="_blank"
            class="font-mono text-blue dark:text-blue-100 hover:underline"
          >
            deno.land/x/nocuous
          </a>.
        </p>
        <p>
          Submit a fully qualified URL below and it and its dependencies will be
          fetched and analyzed, providing back a toxicity analysis:
        </p>
        <form class="flex flex-col my-4" action="/stat" method="get">
          <input
            type="text"
            name="q"
            class="rounded-full text(2xl black) placeholder-red-200 p-4 m-4 bg-red-50 dark:(text-white placeholder-red-800 bg-red-700)"
            placeholder="URL to analyze..."
          />
          <button
            type="submit"
            class="font-header bg-purple-500 p-4 mx-8 my-4 text-xl rounded-xl text-white hover:(text-yellow filter drop-shadow-lg)"
          >
            Analyze...
          </button>
        </form>
      </div>
    </>
  );
}
