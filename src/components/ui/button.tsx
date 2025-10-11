import React from 'react';
import cx from 'classnames';


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
variant?: 'default' | 'secondary' | 'outline';
size?: 'sm' | 'md';
asChild?: boolean; // if you want to pass an <a> child, etc.
children: React.ReactNode;
};


export function Button({ variant = 'default', size = 'md', className, asChild, children, ...rest }: ButtonProps) {
const classes = cx(
'inline-flex items-center justify-center rounded-2xl shadow-sm transition active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none',
{
'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:opacity-95': variant === 'default',
'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700': variant === 'secondary',
'border border-slate-300 dark:border-slate-700 bg-transparent text-slate-900 dark:text-slate-100': variant === 'outline',
},
{ 'px-4 py-2 text-sm': size === 'md', 'px-3 py-1.5 text-xs': size === 'sm' },
className
);
if (asChild) {
return <span className={classes}>{children}</span>;
}
return (
<button className={classes} {...rest}>
{children}
</button>
);
}