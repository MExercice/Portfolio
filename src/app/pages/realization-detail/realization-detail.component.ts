import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Project, Skill } from '../../models/models';
import { switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Component({
    selector: 'app-realization-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './realization-detail.component.html',
    styleUrl: './realization-detail.component.scss'
})
export class RealizationDetailComponent implements OnInit {
    project?: Project;
    linkedSkills: Skill[] = [];

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id');
                return id ? this.dataService.getProjectById(id) : of(undefined);
            }),
            switchMap(project => {
                this.project = project;
                if (project && project.linkedSkillIds.length > 0) {
                    const skillObs = project.linkedSkillIds.map(id => this.dataService.getSkillById(id));
                    return forkJoin(skillObs);
                }
                return of([]);
            })
        ).subscribe(skills => {
            this.linkedSkills = skills.filter((s): s is Skill => !!s);
        });
    }
}
