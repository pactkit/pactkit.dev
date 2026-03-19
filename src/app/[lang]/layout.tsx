import { I18nLayout } from '@/components/i18n-layout';
import { i18n } from '@/lib/i18n';
import type { ReactNode } from 'react';

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return <I18nLayout lang={lang}>{children}</I18nLayout>;
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
