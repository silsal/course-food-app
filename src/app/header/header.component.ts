import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  collapsed = false;

  @Output() navigateTo: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  showComponent(component): void {
    this.navigateTo.emit(component);
  }

}
