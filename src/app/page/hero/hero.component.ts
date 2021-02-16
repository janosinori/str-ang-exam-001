import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from 'src/app/model/hero';
import { HeroService } from 'src/app/service/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroList$: BehaviorSubject<Hero[]> = this.HeroService.list$;
  key: string = 'name';
  phrase: string = '';
  order: string = '';

  constructor(
    private HeroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.HeroService.getAll();
  }

  onChangePhrase(event: Event):void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
  onChangeKey(event: Event):void {
    this.key = (event.target as HTMLInputElement).value;
    this.phrase = '';
  }
  onChangeOrderOld(event: Event):void {
    this.order = (event.target as HTMLInputElement).value;
  }
  onChangeOrder(event: Event):void {
    this.order = (event.target as HTMLTableHeaderCellElement).id;
    console.log(this.order);
  }
}
