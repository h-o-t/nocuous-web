import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <body class="bg-white text-black dark:(bg-black text-white)">
      <Component />
    </body>
  );
}
