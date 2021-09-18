import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidebar: any;
  closeBtn: any;
  searchBtn: any;

  constructor() { }

  ngOnInit() {

    this.sidebar = document.querySelector('.sidebar');
    this.closeBtn = document.querySelector('#btn');
    this.searchBtn = document.querySelector('.bx-search');

  }

  menuBtnChange() {

    if (this.sidebar.classList.contains("open")) {
      this.closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    }
    else {
      this.closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
    }

  }

  toggle() {

    this.sidebar.classList.toggle("open");
    this.menuBtnChange();

  }

}
