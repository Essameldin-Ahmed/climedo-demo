import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsvParserComponent } from './csv-parser.component';

const routes: Routes = [
  {path: '', component: CsvParserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsvParserRoutingModule { }
