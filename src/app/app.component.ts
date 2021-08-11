import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Titulo de la aplication';
  subtitle = 'Subtitulo de la aplication';
  paginaAMostrar: string = '';
  open = false;
  isMobile = false;
  sidenavMode: MatDrawerMode = 'side';

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 700px)'])
      .subscribe((state: BreakpointState) => {
        this.isMobile = !state.matches;
        this.sidenavMode = this.isMobile ? 'over' : 'side';
      });
  }

  onOptionSelectedChange(options: MatListOption[]) {
    if(this.isMobile){
      this.open = false;
    }

    if (options.length > 0) {
      this.paginaAMostrar = options[0].value;
    }
  }
}
