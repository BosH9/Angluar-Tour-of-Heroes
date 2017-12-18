import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from '../app/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeroes():Observable<Hero[]>{
    this.messageService.add('heroservice: fetched heroes');
    return of(HEROES);
  }

  getHero(id:number) : Observable<Hero>{
    this.messageService.add(`HeroService : feteched Hero ${id} details`)
    return of(HEROES.find(hero=>hero.id===id));
  }

}
