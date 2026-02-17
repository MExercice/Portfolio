import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    ownerInfo$?: Observable<any>;

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.ownerInfo$ = this.dataService.getOwnerInfo();
    }
}
