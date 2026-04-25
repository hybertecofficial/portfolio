export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: number;
  description: string;
  tags: string[];
  stack: string[];
  hero: string; // image URL or placeholder
  problem: string;
  solution: string;
  results: string[];
  liveUrl?: string;
  featured: boolean;
}
