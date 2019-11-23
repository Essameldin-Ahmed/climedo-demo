import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.scss']
})
export class SingleDataComponent implements OnInit {

  @Input() singleList: any[];
  displayedColumns: string[]
  constructor() { }

  ngOnInit() {
    if (this.singleList) {
      this.displayedColumns = Object.keys(this.singleList[0])
    }
  }

}
