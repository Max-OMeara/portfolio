export type LinkSet = {
email: string;
phone: string;
github: string;
linkedin: string;
chess: string;
goodreads: string;
};


export type Education = {
school: string;
location: string;
degree: string;
minor: string;
gpa: string;
gradDate: string;
coursework: string[];
deansList: string;
};


export type Experience = {
role: string;
org: string;
time: string;
points: string[];
stack?: string[];
images? : { src: string; alt?: string }[];
};


export type Project = {
title: string;
time: string;
summary: string;
highlights: string[];
links: { live?: string; paper?: string; repository?: string; board?: string };
};


export type Leadership = {
title: string;
org: string;
time: string;
details: string;
};