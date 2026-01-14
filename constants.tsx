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
  Bot,
  Smartphone,
  BrainCircuit
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
  { name: 'Generative AI', category: 'core', icon: <Bot size={16} /> },
  { name: 'Web Scraping', category: 'core', icon: <Globe size={16} /> },
  { name: 'Agentic Workflows', category: 'core', icon: <Workflow size={16} /> },
  { name: 'React Native', category: 'dev', icon: <Smartphone size={16} /> },
  { name: 'TensorFlow', category: 'dev', icon: <BrainCircuit size={16} /> },
  { name: 'Node.js', category: 'dev', icon: <Cpu size={16} /> },
  { name: 'Firebase', category: 'dev', icon: <Database size={16} /> },
  { name: 'Selenium', category: 'dev', icon: <Globe size={16} /> }
];