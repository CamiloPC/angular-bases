import { Component, OnInit } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [HeroComponent, ListComponent],
  templateUrl: './heroes.component.html',
})

export class HeroesComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
