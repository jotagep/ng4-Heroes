import { Hero } from './../hero';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent {

  @Input() hero: Hero;

}
