import React from 'react';
import { Project, Experience, Skill } from './types';
import {
  Terminal,
  Cpu,
  Code2,
  Database,
  Globe,
  LayoutTemplate,
  Workflow,
  Bot
} from 'lucide-react';

export const HERO_TITLES = [
  "AI Engineer",
  "n8n Expert",
  "Vibe Coder",
  "Automation Architect"
];

export const PROJECTS: Project[] = [];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'IT & Digitalization',
    company: 'Hannover Fairs Turkey',
    period: 'Current',
    description: 'Focusing on automating enterprise workflows using Python and AI agents.',
    current: true
  },
  {
    id: '2',
    role: 'Project Control Intern',
    company: 'Çalık Holding',
    period: 'Past',
    description: 'Assisted in project management and control systems.',
    current: false
  }
];

export const SKILLS: Skill[] = [
  { name: 'n8n', category: 'core', icon: <Workflow size={16} /> },
  { name: 'Python', category: 'core', icon: <Terminal size={16} /> },
  { name: 'AI API Management', category: 'core', icon: <Bot size={16} /> },
  { name: 'Web Scraping', category: 'core', icon: <Globe size={16} /> },
  { name: 'Automations', category: 'core', icon: <Workflow size={16} /> },
  { name: 'Flutter', category: 'dev', icon: <LayoutTemplate size={16} /> },
  { name: 'Next.js', category: 'dev', icon: <Globe size={16} /> },
  { name: 'Docker', category: 'dev', icon: <Cpu size={16} /> },
  { name: 'SQL', category: 'dev', icon: <Database size={16} /> },
  { name: 'Selenium', category: 'dev', icon: <Globe size={16} /> }
];