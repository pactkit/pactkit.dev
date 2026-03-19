'use client';

import { I18nProvider } from 'fumadocs-ui/contexts/i18n';
import type { ReactNode } from 'react';

const translations: Record<string, Record<string, string>> = {
  cn: {
    toc: '目录',
    search: '搜索文档',
    previousPage: '上一页',
    nextPage: '下一页',
    lastUpdate: '最后更新',
    searchNoResult: '没有找到结果',
  },
};

export function I18nLayout({
  lang,
  children,
}: {
  lang: string;
  children: ReactNode;
}) {
  return (
    <I18nProvider
      locale={lang}
      locales={[
        { name: 'English', locale: 'en' },
        { name: '中文', locale: 'cn' },
      ]}
      translations={translations[lang]}
    >
      {children}
    </I18nProvider>
  );
}
