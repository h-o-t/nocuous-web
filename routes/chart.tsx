import { Head } from "$fresh/runtime.ts";
import { Chart, defaults } from "fresh_charts/mod.ts";
import { transparentize } from "fresh_charts/utils.ts";

defaults.font = { family: "Varela Round", size: 12 };

const chartColors = {
  blue: "#390099",
  purple: "#9E0059",
  red: "#FF0054",
  orange: "#FF5400",
  yellow: "#FFBD00",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Example Chart</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <Chart
          type="polarArea"
          options={{ devicePixelRatio: 1 }}
          data={{
            labels: ["1", "2", "3"],
            datasets: [{
              label: "Sessions",
              data: [123, 234, 234],
              borderColor: chartColors.blue,
              backgroundColor: transparentize(chartColors.blue, 0.5),
              borderWidth: 1,
            }],
          }}
        />
      </div>
    </>
  );
}
