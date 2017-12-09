import { Component, OnInit, trigger, style, state, keyframes, animate, transition } from '@angular/core';

@Component({
  selector: 'app-animate-list2',
  template: `
  <ul>
  <li *ngFor="let hero of staggeringHeroes; let i = index"
      (@flyInOut.done)="doNext()"
      [@flyInOut]="'in'" (click)="removeMe(i)">
    {{hero}}
  </li>
</ul>
`,
animations: [
  trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      animate(300, keyframes([
        style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
      ]))
    ]),
    transition('* => void', [
      animate(300, keyframes([
        style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
        style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
      ]))
    ])
  ])
]
})
export class AnimateList2Component implements OnInit {

  heroes: any[] = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India'];

  next: number = 0;
  staggeringHeroes: any[] = [];

  constructor() {
    this.doNext();
  }


  ngOnInit() {
  }

  doNext() {
    if (this.next < this.heroes.length) {
      this.staggeringHeroes.push(this.heroes[this.next++]);
    }
  }

  removeMe(i) {
    this.staggeringHeroes.splice(i, 1);
  }

}



