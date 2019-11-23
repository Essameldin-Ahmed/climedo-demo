import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { MainService } from '../core/main.service';
@Component({
  selector: 'app-csv-parser',
  templateUrl: './csv-parser.component.html',
  styleUrls: ['./csv-parser.component.scss']
})
export class CsvParserComponent implements OnInit {

  constructor(private mainService: MainService) { }
  arrayBuffer
  dataList: { name: string, list: any[] }[] = [];


  ngOnInit() {
  }

  onChange(files: File[]) {
    this.mainService.startLoading();
    const file = files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      console.log(file);
      workbook.SheetNames.forEach((sheetName) => {
        var worksheet = workbook.Sheets[sheetName];
        sheetName = file.type === "text/csv" ? 'CSV' : sheetName;
        this.dataList.push({ name: sheetName, list: XLSX.utils.sheet_to_json(worksheet, { raw: true }) });
      })
      this.mainService.stopLoading();
    }
    fileReader.readAsArrayBuffer(file);
  }

}
