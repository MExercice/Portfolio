import { RenderMode, ServerRoute } from '@angular/ssr';

import { PORTFOLIO_DATA } from './data/portfolio-data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'competences/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return PORTFOLIO_DATA.skills.map(skill => ({ id: skill.id }));
    }
  },
  {
    path: 'realisations/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return PORTFOLIO_DATA.projects.map(project => ({ id: project.id }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
