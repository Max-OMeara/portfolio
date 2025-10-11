import React from 'react';
import { ExternalLink } from 'lucide-react';


export function Anchor({ href, children }: { href?: string; children: React.ReactNode }) {
if (!href)
return (
<span className="inline-flex items-center gap-1 opacity-60">
{children}
<ExternalLink className="h-3.5 w-3.5" />
</span>
);
return (
<a href={href} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 hover:underline">
{children}
<ExternalLink className="h-3.5 w-3.5" />
</a>
);
}