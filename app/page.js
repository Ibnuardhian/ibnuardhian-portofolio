import React from 'react';
import About from "@/components/about";
import Education from "@/components/education/education";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Volunteering from "@/components/volunteering/volunteering";
import Projects from '@/components/projects/projects';
import Certifications from '@/components/certifications/certifications';
import Credits from '@/components/credits';
import {promises as fs} from 'fs';
import { Certificate } from 'crypto';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main suppressHydrationWarning className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
      <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header data={data.general} typewriterStrings={data.general.typewriterStrings}></Header>
        <div className='lg:pl-[50%]'>
          <About data={data.general}></About>
          <Experiences data={data.experiences}></Experiences>
          <Education data={data.education}></Education>
          <Projects id="freelance-projects" title="Freelance Projects" data={data.freelanceProjects}></Projects>
          <Projects id="personal-projects" title="Personal Projects" data={data.personalProjects}></Projects>
          <Certifications data={data.certifications}></Certifications>
          {/* <Volunteering data={data.volunteering}></Volunteering> */}
          <Credits data={data.general}></Credits>
        </div>
      </div>
    </main>
  )
}
