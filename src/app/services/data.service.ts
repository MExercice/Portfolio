import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PORTFOLIO_DATA } from '../data/portfolio-data';
import { PortfolioData, Skill, Project, TimelineEntry } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor() { }

    getPortfolioData(): Observable<PortfolioData> {
        return of(PORTFOLIO_DATA);
    }

    getSkills(): Observable<Skill[]> {
        return of(PORTFOLIO_DATA.skills);
    }

    getSkillById(id: string): Observable<Skill | undefined> {
        return of(PORTFOLIO_DATA.skills.find(s => s.id === id));
    }

    getProjects(): Observable<Project[]> {
        return of(PORTFOLIO_DATA.projects);
    }

    getProjectById(id: string): Observable<Project | undefined> {
        return of(PORTFOLIO_DATA.projects.find(p => p.id === id));
    }

    getExperiences(): Observable<TimelineEntry[]> {
        return of(PORTFOLIO_DATA.experiences);
    }

    getOwnerInfo() {
        return of(PORTFOLIO_DATA.owner);
    }
}
