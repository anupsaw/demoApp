import { Component, OnInit, trigger, Output, EventEmitter,
   style, state, transition, keyframes, animate, HostListener } from '@angular/core';

@Component({
  selector: 'app-animate-button',
  templateUrl: './animate-button.component.html',
  styleUrls: ['./animate-button.component.scss'],
  animations: [trigger('changeSize', [
    state('small', style({ transform: 'scale(1)' })),
    state('large', style({ transform: 'scale(1.4)' })),
    transition('small <=> large', animate('500ms'))

  ])]
})
export class AnimateButtonComponent implements OnInit {


  state: string;
  constructor() {
    this.state = 'small';
  }



  toggal() {
    this.state = this.state === 'small' ? 'large' : 'small';
  }

  ngOnInit() {

  }

}
