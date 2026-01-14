import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  featured?: boolean;
  imageGradient: string; // CSS gradient string for placeholder visual
  colSpan?: string; // Tailwind class for grid span
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  current: boolean;
}

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  category: 'core' | 'dev' | 'tools';
}