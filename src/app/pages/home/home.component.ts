import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    ownerInfo$?: Observable<any>;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.ownerInfo$ = this.dataService.getOwnerInfo();
    }
}
