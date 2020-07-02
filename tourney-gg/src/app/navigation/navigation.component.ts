import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  sideNav;
  navItems: { label: string; routerLink: string}[] = [];
  constructor() { }

  ngOnInit(): void {
    this.sideNav = document.querySelector('nav');
    this.buildNavItems();
  }

  buildNavItems() {
    // TODO restrict access using user rights
    this.navItems.push(
      { label: 'Login', routerLink: 'login'},
      { label: 'Home', routerLink: 'home'},
      { label: 'Dashboard', routerLink: 'dashboard'},
      { label: 'Tournaments', routerLink: 'tournaments'}
    );
  }

  toggleSideNav() {
    this.sideNav.classList.toggle('open');
  }
}
