import { source } from '@/lib/source';
import { DocsPage, DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import { i18n } from '@/lib/i18n';
import type { Metadata } from 'next';

export default async function Page(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc}>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ lang: string; slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug, params.lang);
  if (!page) return {};

  const title = `${page.data.title} — PactKit Docs`;
  const description = page.data.description ?? 'PactKit documentation';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://pactkit.dev/docs/${(params.slug ?? []).join('/')}`,
      siteName: 'PactKit',
      type: 'article',
    },
  };
}

const docSlugs = [
  [],  // index page
  ['installation'],
  ['examples'],
  ['workflow'],
  ['agents'],
  ['architecture'],
  ['commands'],
  ['skills'],
  ['configuration'],
  ['mcp-integration'],
  ['faq'],
  ['changelog'],
];

export function generateStaticParams() {
  return i18n.languages.flatMap((lang) =>
    docSlugs.map((slug) => ({
      lang,
      slug,
    })),
  );
}
