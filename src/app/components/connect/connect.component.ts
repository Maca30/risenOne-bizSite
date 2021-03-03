import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class BasicelementsComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: true;
    focus: any;
    constructor() { }

    ngOnInit() {}

}
