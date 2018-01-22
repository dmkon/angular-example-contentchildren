import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements AfterContentInit{

  constructor() { }

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.tabs.forEach(tabInstance => console.log(tabInstance))
  }
}
