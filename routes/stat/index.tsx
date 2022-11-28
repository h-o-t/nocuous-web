import { type Handlers, PageProps } from "$fresh/server.ts";
import { instantiate, type StatRecord, stats } from "nocuous";
import { common } from "std/path/common.ts";

type Data = Map<string, StatRecord[]>;

export default function Stats({ data }: PageProps<Data>) {
  const commonPath = common([...data.keys()]);
  const tbody = [];
  for (const [path, stats] of data) {
    let total = 0;
    const items = [];
    for (const { score } of stats) {
      total += score;
      items.push(<td>{score ? score.toFixed(2) : " "}</td>);
    }
    tbody.push(
      <tr>
        <td>{path.replace(commonPath, "")}</td>
        <td>{total ? total.toFixed(2) : undefined}</td>
        {items}
      </tr>,
    );
  }
  return (
    <div class="p-4 mx-auto max-w-screen-lg">
      {commonPath
        ? (
          <div>
            <span>Root:</span>
            {commonPath}
          </div>
        )
        : undefined}
      <table>
        <thead>
          <tr>
            <th>Path</th>
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
        const result = await stats(root);
        return render(result);
      } catch {
        return renderNotFound();
      }
    } else {
      return renderNotFound();
    }
  },
};
