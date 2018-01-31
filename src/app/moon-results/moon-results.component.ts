import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moon-results',
  templateUrl: './moon-results.component.html',
  styleUrls: ['./moon-results.component.css']
})
export class MoonResultsComponent {
  @Input() childMoon;
  console.log(this.childMoon);
  constructor() { }



}
