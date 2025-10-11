import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'components/ui/card';
import { Badge } from 'components/ui/badge';
import { Button } from 'components/ui/button';
import { Project } from 'types';

export function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <Calendar className="h-4 w-4" /> {p.time}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{p.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.highlights.map((h) => (
              <Badge key={h} variant="secondary" className="rounded-full">
                {h}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-3">
          {p.links.live ? (
            <Button asChild size="sm">
              <a href={p.links.live} target="_blank" rel="noreferrer noopener">
                Live Demo
              </a>
            </Button>
          ) : (
            <Button size="sm" variant="secondary" disabled>
              Live Demo
            </Button>
          )}
          {p.links.repo ? (
            <Button asChild size="sm" variant="outline">
              <a href={p.links.repo} target="_blank" rel="noreferrer noopener">
                Source
              </a>
            </Button>
          ) : (
            <Button size="sm" variant="outline" disabled>
              Source
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

