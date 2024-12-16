import path from "node:path";
import { globbySync } from "globby";
import { getRootLayout } from "~/app/_layout";
import { locales, sourceLocale } from "~/i18n";

// eslint-disable-next-line n/prefer-global/process
const cwd = process.cwd();
const main = `${cwd}/src/app/(main)`;
const pages = globbySync(`${main.replace(/[()]/g, "\\$&")}/**/page.tsx`);

export async function generateStaticParams() {
  const pagesSlug = pages
    .map((p) => path.dirname(p).slice(main.length + 1))
    .map((r) => {
      return r.split("/");
    });

  const routes = locales
    .filter((i) => i !== sourceLocale)
    .reduce<
      { slug: string[] }[]
    >((pre, cur) => pre.concat(pagesSlug.map((p) => ({ slug: [cur, ...p] }))), []);

  return routes;
}

export default async function Layout({
  params,
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const { slug } = await params;
  const lang = slug[0];

  const RootLayout = getRootLayout(lang);

  return <RootLayout>{children}</RootLayout>;
}
