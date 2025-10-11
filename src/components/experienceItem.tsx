import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from 'components/ui/badge';
import { Experience } from 'types';

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <motion.li initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-6">
      <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <p className="font-medium">{item.role}</p>
        <span className="text-slate-500 dark:text-slate-400">@ {item.org}</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">{item.time}</span>
      </div>
      <ul className="mt-2 space-y-2">
        {item.points.map((pt, i) => (
          <li key={i} className="text-sm text-slate-500 dark:text-slate-400 leading-6">
            • {pt}
          </li>
        ))}
      </ul>
      <div className="mt-2 flex flex-wrap gap-2">
        {item.stack?.map((t) => (
          <Badge key={t} variant="outline" className="rounded-full">
            {t}
          </Badge>
        ))}
      </div>
    </motion.li>
  );
}