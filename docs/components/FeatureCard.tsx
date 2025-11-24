import React from 'react';
import Link from 'next/link';

export type FeatureCardProps = {
  title: string;
  href?: string;
  badge?: string;
  children: React.ReactNode;
};

export function FeatureCard({ title, href, badge, children }: FeatureCardProps) {
  const content = (
    <article
      className="group flex h-full flex-col rounded-xl border border-slate-200/80 bg-white/70 p-6 shadow-sm
                 ring-1 ring-slate-100/60 backdrop-blur-sm transition hover:-translate-y-0.5
                 hover:border-[var(--zeus-blue)] hover:shadow-lg hover:ring-[var(--zeus-blue)]/40
                 dark:border-slate-800/80 dark:bg-slate-900/70 dark:ring-slate-800/80"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <span className="text-base">{badge ?? 'Ω'}</span>
          <span>Aspect of Zeus</span>
        </div>
        <span className="text-xs text-[var(--lightning-gold)] dark:text-[var(--lightning-gold)]/90">
          Ϟ Crafted in Olympus
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-50">{title}</h3>

      <div className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{children}</div>

      {href && (
        <div className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[var(--zeus-blue)] transition group-hover:text-[var(--zeus-purple)] dark:text-[var(--zeus-purple)]">
          <span>Descend from Olympus</span>
          <span aria-hidden="true">→</span>
        </div>
      )}

      <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-[var(--zeus-blue)] via-[var(--zeus-purple)] to-[var(--lightning-gold)] opacity-80" />
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="no-underline">
        {content}
      </Link>
    );
  }

  return content;
}

export function FeatureCardGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function CommunityCardGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-6 md:grid-cols-3">{children}</div>;
}
