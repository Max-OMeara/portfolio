import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from 'components/ui/badge';
import { Experience } from 'types';

export function ExperienceItem({ item }: { item: Experience }) {
  const [openSrc, setOpenSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenSrc(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <motion.li
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative pl-6"
      >
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

        {item.images?.length ? (
          <div className="mt-3 flex gap-2">
            {item.images.slice(0, 3).map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setOpenSrc(img.src)}
                className="group relative h-16 w-24 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800"
                aria-label="Open image"
              >
                <img
                  src={img.src}
                  alt={img.alt ?? ''}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        ) : null}
      </motion.li>

      <AnimatePresence>
        {openSrc && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenSrc(null)}
          >
            <motion.img
              src={openSrc}
              alt=""
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


// export function ExperienceItem({ item }: { item: Experience }) {
//   return (
//     <motion.li initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative pl-6">
//       <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-slate-900 dark:bg-slate-100" />
//       <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
//         <p className="font-medium">{item.role}</p>
//         <span className="text-slate-500 dark:text-slate-400">@ {item.org}</span>
//         <span className="text-xs text-slate-500 dark:text-slate-400">{item.time}</span>
//       </div>
//       <ul className="mt-2 space-y-2">
//         {item.points.map((pt, i) => (
//           <li key={i} className="text-sm text-slate-500 dark:text-slate-400 leading-6">
//             • {pt}
//           </li>
//         ))}
//       </ul>
//       <div className="mt-2 flex flex-wrap gap-2">
//         {item.stack?.map((t) => (
//           <Badge key={t} variant="outline" className="rounded-full">
//             {t}
//           </Badge>
//         ))}
//       </div>
//     </motion.li>
//   );
// }