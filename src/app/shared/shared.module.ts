import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatTableModule, MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    MatTableModule,
    MatTabsModule
  ]
})
export class SharedModule { }
