import { Component, OnInit } from '@angular/core';

import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cnsms-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isCollapsed = false;
  classApplied = false;

  faCoffee = faCoffee;
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

  toggleClass() {
    this.classApplied = !this.classApplied;
  }
}
