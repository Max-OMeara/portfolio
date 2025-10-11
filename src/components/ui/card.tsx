import React from 'react';


export function Card({ className, children }: React.PropsWithChildren<{ className?: string }>) {
return (
<div className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 shadow-sm ${className ?? ''}`}>
{children}
</div>
);
}
export function CardHeader({ children }: React.PropsWithChildren) {
return <div className="px-5 pt-5">{children}</div>;
}
export function CardTitle({ children, className }: React.PropsWithChildren<{ className?: string }>) {
return <h3 className={`font-semibold tracking-tight ${className ?? ''}`}>{children}</h3>;
}
export function CardDescription({ children, className }: React.PropsWithChildren<{ className?: string }>) {
return <p className={`text-sm text-slate-500 dark:text-slate-400 ${className ?? ''}`}>{children}</p>;
}
export function CardContent({ children, className }: React.PropsWithChildren<{ className?: string }>) {
return <div className={`px-5 pb-5 ${className ?? ''}`}>{children}</div>;
}
export function CardFooter({ children, className }: React.PropsWithChildren<{ className?: string }>) {
return <div className={`px-5 pb-5 ${className ?? ''}`}>{children}</div>;
}