import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsvParserComponent } from './csv-parser.component';
import { CsvParserRoutingModule } from './csv-parser-routing.module';
import { CsvViweComponent } from './csv-viwe/csv-viwe.component';
import { SharedModule } from '../shared/shared.module';
import { SingleDataComponent } from './single-data/single-data.component';

@NgModule({
  declarations: [CsvParserComponent, CsvViweComponent, SingleDataComponent],
  imports: [
    CommonModule,
    SharedModule,
    CsvParserRoutingModule
  ]
})
export class CsvParserModule { }
