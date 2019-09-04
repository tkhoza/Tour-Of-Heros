import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  hero: Hero[] = [];
  selectedHero: Hero;

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.hero = HEROES;
    return of(HEROES);
  }

  setHero(hero: Hero): void {
       this.selectedHero = hero;
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.id === id));
  }
}
