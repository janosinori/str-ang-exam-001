import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1, name: 'Édesanyák', superPower:'Anyai szeretet', address:'A szívedben'},
    {id: 2, name: 'Édesapák', superPower:'Humor', address:'A fejedben'}, 
    {id: 3, name: 'Nagymamák', superPower:'Elfogadás', address:'Mindenhol'},
    {id: 4, name: 'Nagypapák', superPower:'Minden probléma megoldása', address:'Egy biztos ponton'},
    {id: 5, name: 'Tanárok', superPower:'Rugalmasság', address:'A hétköznapokban'},
    {id: 6, name: 'Orvosok', superPower:'Gyógyítás', address:'Kórházak'},
    {id: 7, name: 'Eladók', superPower:'Figyelmesség', address:'Boltokban'},
    {id: 8, name: 'Sofórök', superPower:'Óvatosság', address:'Járműveken'},
  ];

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
  constructor() { }

  getAll(): void{
    this.list$.next(this.list);
  }
}
