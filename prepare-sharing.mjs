import { readFile, writeFile } from "node:fs/promises";

if (process.env.URL) {
  const { origin } = new URL(process.env.URL);
  for (const page of ["index.html", "en.html"]) {
    const file = new URL(`./dist/${page}`, import.meta.url);
    const html = await readFile(file, "utf8");
    const updated = html.replace(
      /(<meta property="og:image" content=")(?:https?:\/\/[^/"]+)?(\/assets\/share-(?:pt|en)\.jpg)(")/,
      (_, prefix, asset, suffix) => `${prefix}${origin}${asset}${suffix}`,
    );
    await writeFile(file, updated);
  }
}
