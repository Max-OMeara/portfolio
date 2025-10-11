import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Button } from 'components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from 'components/ui/card';
import { Badge } from 'components/ui/badge';
import { Separator } from 'components/ui/separator';
import { Section } from 'components/section';
import { ProjectCard } from 'components/projectCard';
import { ExperienceItem } from 'components/experienceItem';
import { Anchor } from 'components/anchor';
import { LINKS } from 'data/links';
import { EDUCATION } from 'data/education';
import { SKILLS } from 'data/skills';
import { EXPERIENCE } from 'data/experience';
import { PROJECTS } from 'data/projects';
import { LEADERSHIP } from 'data/leadership';

export default function App() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    const className = 'dark';
    if (dark) root.classList.add(className);
    else root.classList.remove(className);
  }, [dark]);

  const headline = useMemo(
    () => `AI‑minded Full‑Stack Developer focused on React, TypeScript, and ML‑backed experiences`,
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-900/60 bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold">
            Max O’Meara
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#projects">
              Projects
            </a>
            <a className="hover:underline" href="#experience">
              Experience
            </a>
            <a className="hover:underline" href="#education">
              Education
            </a>
            <a className="hover:underline" href="#skills">
              Skills
            </a>
            <a className="hover:underline" href="#leadership">
              Leadership
            </a>
            <a className="hover:underline" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setDark((d) => !d)}>
              {dark ? 'Light' : 'Dark'}
            </Button>
            <Button asChild size="sm">
              <a href={LINKS.github} target="_blank" rel="noreferrer noopener">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div id="top" className="max-w-6xl mx-auto px-4 pt-12 sm:pt-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Max O’Meara</h1>
            <p className="mt-3 text-lg text-slate-500 dark:text-slate-400 max-w-2xl">{headline}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="secondary">
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Contact</a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="h-4 w-4" /> Boston University • GPA {EDUCATION.gpa} • {EDUCATION.gradDate}
              </span>
            </div>
          </div>
          <div className="md:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Links</CardTitle>
                <CardDescription>Find me around the web</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm">
                <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${LINKS.email}`}>
                  <Mail className="h-4 w-4" />
                  {LINKS.email}
                </a>
                <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${LINKS.phone}`}>
                  <Phone className="h-4 w-4" />
                  {LINKS.phone}
                </a>
                <a className="inline-flex items-center gap-2 hover:underline" href={LINKS.github} target="_blank" rel="noreferrer noopener">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a className="inline-flex items-center gap-2 hover:underline" href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="A few representative builds and studies">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" subtitle="Roles, responsibilities, and impact">
        <div className="relative">
          <div className="absolute left-1 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
          <ul className="space-y-6 pl-4">
            {EXPERIENCE.map((item) => (
              <ExperienceItem key={`${item.org}-${item.role}`} item={item} />
            ))}
          </ul>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <Card>
          <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" /> {EDUCATION.school}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4" /> {EDUCATION.location}
                </CardDescription>
              </div>
              <Badge variant="secondary" className="rounded-full">
                {EDUCATION.degree}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-slate-500 dark:text-slate-400">Expected Graduation: {EDUCATION.gradDate}</div>
            <Separator className="my-4" />
            <p className="text-sm font-medium mb-2">Relevant Coursework</p>
            <div className="flex flex-wrap gap-2">
              {EDUCATION.coursework.map((c) => (
                <Badge key={c} variant="outline" className="rounded-full">
                  {c}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-2 gap-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Programming</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {SKILLS.programming.map((s) => (
                <Badge key={s} variant="outline" className="rounded-full">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tools</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {SKILLS.tools.map((s) => (
                <Badge key={s} variant="outline" className="rounded-full">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Certifications</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {SKILLS.certifications.map((s) => (
                <Badge key={s} variant="secondary" className="rounded-full">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Interests</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {SKILLS.interests.map((s) => (
                <Badge key={s} variant="outline" className="rounded-full">
                  {s}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Leadership */}
      <Section id="leadership" title="Leadership">
        <div className="grid sm:grid-cols-2 gap-5">
          {LEADERSHIP.map((l) => (
            <Card key={l.title}>
              <CardHeader>
                <CardTitle className="text-base">{l.title}</CardTitle>
                <CardDescription>
                  {l.org} • {l.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500 dark:text-slate-400">{l.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" subtitle="Say hi, ask about my work, or grab my resume">
        <Card>
          <CardContent className="py-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  I’m open to internships and roles in full‑stack, AI/ML, and platform engineering. The fastest way to reach me is email.
                </p>
                <div className="flex flex-col gap-2">
                  <Button asChild className="w-fit">
                    <a href={`mailto:${LINKS.email}`}>
                      <Mail className="h-4 w-4 mr-2" />Email Me
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-fit">
                    <a href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">
                      <Linkedin className="h-4 w-4 mr-2" />Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> {LINKS.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> {LINKS.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <a className="hover:underline" href={LINKS.github} target="_blank" rel="noreferrer noopener">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <a className="hover:underline" href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Max O’Meara. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a className="hover:underline" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
