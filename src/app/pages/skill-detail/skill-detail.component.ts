import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Skill, Project } from '../../models/models';
import { switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Component({
    selector: 'app-skill-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './skill-detail.component.html',
    styleUrl: './skill-detail.component.scss'
})
export class SkillDetailComponent implements OnInit {
    skill?: Skill;
    linkedProjects: Project[] = [];

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id');
                return id ? this.dataService.getSkillById(id) : of(undefined);
            }),
            switchMap(skill => {
                this.skill = skill;
                if (skill && skill.linkedProjectIds.length > 0) {
                    const projectObs = skill.linkedProjectIds.map(id => this.dataService.getProjectById(id));
                    return forkJoin(projectObs);
                }
                return of([]);
            })
        ).subscribe(projects => {
            this.linkedProjects = projects.filter((p): p is Project => !!p);
        });
    }
}
