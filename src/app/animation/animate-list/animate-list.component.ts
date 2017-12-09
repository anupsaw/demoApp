import { Component, OnInit, trigger, style, state, transition, keyframes, animate, HostListener } from '@angular/core';

@Component({
  selector: 'app-animate-list',
  templateUrl: './animate-list.component.html',
  styleUrls: ['./animate-list.component.scss'],
  animations: [trigger('coolEntry', [

    state('enter', style({ transform: 'translateY(0)' })),
    transition('* => *', [style({ opacity: 1, transform: 'translateY(20px)' }), animate('500ms')])
  ])]
})
export class AnimateListComponent implements OnInit {

  state = 'enter';
  items11 = ['Component', 'Directive', 'Module', 'Pipe', 'Service', 'Animation'];
  items = [];
  constructor() { }

  ngOnInit() {

    this.doNext();

  }
  doNext() {
    if (this.items.length < this.items11.length) {
      this.items.push(this.items11[this.items.length]);
    }
  }
  addNew() {
    this.items.push('Newly Added');
  }

}
