import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    @Output() featureSelected = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    onSelect(link: string): void{
        this.featureSelected.emit(link);
    }
}
