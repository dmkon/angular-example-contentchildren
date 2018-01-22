import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent {

  constructor() { }

  @Input() title;
}
