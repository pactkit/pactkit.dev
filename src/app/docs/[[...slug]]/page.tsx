import { source } from '@/lib/source';
import { DocsPage, DocsBody } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug, 'en');
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
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug, 'en');
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
  [],
  ['philosophy'],
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
  return docSlugs.map((slug) => ({ slug }));
}
