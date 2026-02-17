import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { SkillDetailComponent } from './pages/skill-detail/skill-detail.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RealizationDetailComponent } from './pages/realization-detail/realization-detail.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'presentation', component: AboutComponent },
    { path: 'competences', component: SkillsComponent },
    { path: 'competences/:id', component: SkillDetailComponent },
    { path: 'realisations', component: ProjectsComponent },
    { path: 'realisations/:id', component: RealizationDetailComponent },
    { path: 'parcours', component: TimelineComponent },
    { path: 'contact', redirectTo: 'presentation', pathMatch: 'full' }, // Or separate contact page
    { path: '**', redirectTo: '' }
];
