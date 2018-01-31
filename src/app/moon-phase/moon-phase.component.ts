import { Component, OnInit } from '@angular/core';

import { MoonService } from '../moon.service';

@Component({
  selector: 'app-moon-phase',
  templateUrl: './moon-phase.component.html',
  styleUrls: ['./moon-phase.component.css'],
  providers: [MoonService]
})

export class MoonPhaseComponent implements OnInit {
  constructor(private moonService: MoonService) { }

  ngOnInit() {

  }

  moon: any[]=null;
  getMoonData() {
    this.moonService.getByPhaseAndPercentage().subscribe(response => {
      this.moon = response.json();
      // console.log(this.moon);
  })
  }
}
