import React from 'react';
export function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
return (
<section id={id} className="scroll-mt-28 py-12 sm:py-16">
<div className="max-w-6xl mx-auto px-4">
<div className="mb-6">
<h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
{subtitle && <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>}
</div>
{children}
</div>
</section>
);
}