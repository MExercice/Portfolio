import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Project } from '../../models/models';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
    projects: Project[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getProjects().subscribe(data => {
            this.projects = data;
        });
    }
}
