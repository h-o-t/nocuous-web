import { Head } from "$fresh/runtime.ts";

export default function Title(
  {
    title,
    description =
      "A static analysis tool to measure code toxicity for JavaScript and TypeScript.",
  }: { title: string; description?: string },
) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="nocuous" />
      <meta property="og:locale" content="en_AU" />
      <meta
        name="keywords"
        content="typescript, javascript, toxic code, static analysis, code quality"
      />
    </Head>
  );
}
