import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { TimelineEntry } from '../../models/models';

@Component({
    selector: 'app-timeline',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
    experiences: TimelineEntry[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.dataService.getExperiences().subscribe(data => {
            // Data is already anti-chronological in mock, but ensuring here
            this.experiences = data;
        });
    }
}
