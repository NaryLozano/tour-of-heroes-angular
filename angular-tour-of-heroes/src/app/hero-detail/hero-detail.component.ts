
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './../hero';
import { HeroService } from './../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute, //holds info ab the route of HeroDetailComponent
    private heroService: HeroService, //gets hero data from the remote server and this component will use it to get the hero-to-display
    private location: Location// is an Angular service for interacting with the browser
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  // the route snapshot isa static image if the route information shortly after the component was created
  // the paramMap is a dictionary of route parameter values extracted form the URL. the id key returns the id of the hero to fetch
  // Route parameters are always strings. the Js + operator converts the string to a number, wich is what a hero id should be
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);           
  };

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.heroService.updateHero(this.hero)
    .subscribe(() => this.goBack());
  }
}
