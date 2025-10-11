import React from 'react';
import cx from 'classnames';


export function Badge({ children, variant = 'outline', className }: React.PropsWithChildren<{ variant?: 'outline' | 'secondary'; className?: string }>) {
return (
<span
className={cx(
'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
variant === 'outline' && 'border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-transparent',
variant === 'secondary' && 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100',
className
)}
>
{children}
</span>
);
}