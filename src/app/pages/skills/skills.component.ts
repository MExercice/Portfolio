import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Skill } from '../../models/models';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, RouterLink, BaseChartDirective],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
    isBrowser: boolean;
    skills: Skill[] = [];
    technicalSkills: Skill[] = [];
    softSkills: Skill[] = [];
    activeTab: 'Technique' | 'Humaine' = 'Technique';

    public radarChartOptions: ChartConfiguration['options'] = {
        responsive: true,
        scales: {
            r: {
                angleLines: { color: 'rgba(255, 255, 255, 0.2)' },
                grid: { color: 'rgba(255, 255, 255, 0.2)' },
                pointLabels: { color: '#f8fafc', font: { size: 12 } },
                ticks: { display: false, stepSize: 20 },
                suggestedMin: 0,
                suggestedMax: 100
            }
        },
        plugins: {
            legend: { display: false }
        }
    };

    public radarChartLabels: string[] = [];
    public radarChartData: ChartConfiguration['data'] = {
        labels: this.radarChartLabels,
        datasets: [
            {
                data: [],
                label: 'Niveau',
                fill: true,
                backgroundColor: 'rgba(37, 99, 235, 0.2)',
                borderColor: '#2563eb',
                pointBackgroundColor: '#2563eb',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#2563eb',
            }
        ]
    };
    public radarChartType: ChartType = 'radar';

    constructor(
        private dataService: DataService,
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit(): void {
        this.dataService.getSkills().subscribe(data => {
            this.skills = data;
            this.technicalSkills = data.filter(s => s.type === 'Technique');
            this.softSkills = data.filter(s => s.type === 'Humaine');
            this.updateChart();
        });
    }

    setTab(tab: 'Technique' | 'Humaine') {
        this.activeTab = tab;
        this.updateChart();
    }

    updateChart() {
        const currentSkills = this.activeTab === 'Technique' ? this.technicalSkills : this.softSkills;

        // Create a new data object to force Angular change detection to update the chart
        this.radarChartData = {
            labels: currentSkills.map(s => s.name),
            datasets: [
                {
                    data: currentSkills.map(s => s.level),
                    label: 'Niveau',
                    fill: true,
                    backgroundColor: 'rgba(37, 99, 235, 0.2)',
                    borderColor: '#2563eb',
                    pointBackgroundColor: '#2563eb',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#2563eb',
                }
            ]
        };
    }
}
