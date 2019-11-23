import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-csv-view',
  templateUrl: './csv-viwe.component.html',
  styleUrls: ['./csv-viwe.component.scss']
})
export class CsvViweComponent implements OnInit {
  @Input() dataSource: {name: string, list: any[]}[];

  displayedColumns: string[];
  constructor() { }

  ngOnInit() {
    console.log(this.dataSource)

  }

}
