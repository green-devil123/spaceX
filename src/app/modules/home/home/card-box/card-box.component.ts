import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {
  @Input() spaceAllData:any
  @Input() loaded:any
  constructor() { }

  ngOnInit(): void {
    debugger
  }

}
