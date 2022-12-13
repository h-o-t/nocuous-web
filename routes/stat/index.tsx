import { type Handlers, PageProps } from "$fresh/server.ts";
import { instantiate, type StatRecord, stats } from "nocuous";
import { common } from "std/path/common.ts";

import Banner from "@components/Banner.tsx";
import Title from "@components/Title.tsx";

type Data = { root: URL; data: Map<string, StatRecord[]> };

const statData: Record<string, { title: string; index: number }> = {
  "file-length": { title: "Module Length", index: 0 },
  "function-length": { title: "Function Length", index: 1 },
  "anon-inner-length": { title: "Anon Inner Length", index: 2 },
  "cyclomatic-complexity": { title: "Cyclomatic Complexity", index: 3 },
  "binary-expression-complexity": { title: "Binary Expr Complexity", index: 4 },
  "class-data-abstraction-coupling": { title: "Class DAC", index: 5 },
  "parameter-number": { title: "Parameter Count", index: 6 },
  "missing-switch-default": { title: "Missing Switch Default", index: 7 },
};

export default function Stats({ data: { root, data } }: PageProps<Data>) {
  const commonPath = common([...data.keys()]);
  const tbody = [];
  for (const [path, stats] of data) {
    let total = 0;
    const items = [];
    for (const { score, metric } of stats) {
      total += score;
      if (metric in statData) {
        items[statData[metric].index] = score
          ? <td class="text-right">{score.toFixed(2)}</td>
          : <td>&nbsp;</td>;
      }
    }
    tbody.push(
      <tr>
        <td class="bg-blue-100 dark:bg-blue-800">
          <code>{path.replace(commonPath, "")}</code>
        </td>
        <td class="text-right">{total ? total.toFixed(2) : undefined}</td>
        {items}
      </tr>,
    );
  }
  return (
    <div class="p-4 mx-auto max-w-screen-lg">
      <Title
        title={`Toxicity Report — ${root.toString()}`}
        description={`Code toxicity report for "${root.toString()}".`}
      />
      <Banner subtitle="Code toxicity report">{root.toString()}</Banner>
      {commonPath
        ? (
          <div class="my-4">
            <span class="font-bold pr-4">Shared root:</span>
            <code>{commonPath}</code>
          </div>
        )
        : undefined}
      <table>
        <thead>
          <tr>
            <th class="bg-blue">Path</th>
            <th class="bg-blue">Total Score</th>
            {Object.values(statData).map(({ title }) => (
              <th class="bg-blue">{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
}

export const handler: Handlers<Data> = {
  async GET(req, { render, renderNotFound }) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q");
    if (query) {
      try {
        const root = new URL(query);
        await instantiate();
        const data = await stats(root);
        return render({ root, data });
      } catch {
        return renderNotFound();
      }
    } else {
      return renderNotFound();
    }
  },
};
