import {
  Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef,
  ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewchildComponent implements OnInit, AfterViewInit {


  @ViewChild('mydiv', { read: ElementRef }) div: ElementRef;
  @ViewChildren('mydiv') mydivs: QueryList<ElementRef>;

  myValue = {text: 'I am child'};

  // TemplateRef is wrong view child will always read ElementRef
  //  @ViewChild('mydiv', {read: TemplateRef}) div: TemplateRef<any>;



  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  // At this state component is loaded completly and all the elements are available at final stateh
  ngAfterViewInit() {
    console.log(this.div);
  }

  childMethod() {
   // this.myValue = 'updated';
    console.log('I am child');
  }

  refresh() {
    this.cd.detectChanges();
  }

}
